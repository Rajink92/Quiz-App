/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log(req.body);
    let quizzes = `
      select * from quizzes
      order by id
      limit 8
    `;
    console.log(quizzes);
    let questionIds = [];
    const results = {
      quizzes: [],
      questions: {},
      answers: {}
    };
    db.query(quizzes)
      .then(data => {
        const ids = data.rows.map((quiz) => parseInt(quiz.id));
        console.log(ids);
        results.quizzes = data.rows;
        return db.query(`
            select * from questions
            where quiz_id = ANY($1::int[])
            order by id ASC
          `, [ids]);

      }).then((questions) => {
        questionIds = questions.rows.map((q) => parseInt(q.id));

        for (let i = 0; i < results.quizzes.length; i += 1) {
          const quizId = results.quizzes[i].id;
          const questionGroup = questions.rows.filter((q) => q.quiz_id === results.quizzes[i].id);
          questionGroup.sort((a,b) => {
            return a.id - b.id;
          });
          results.questions[quizId] = questionGroup;
        }
        return db.query(`
          select * from answers
          where question_id = ANY($1::int[])
        `, [questionIds]);
      }).then((answers) => {
        if (questionIds && questionIds.length > 0) {
          for (let n = 0; n < questionIds.length; n += 1) {
            const questionId = questionIds[n];
            const answerGroup = answers.rows.filter((a) => a.question_id === questionId);
            answerGroup.sort((a,b) => {
              return a.id - b.id;
            });
            results.answers[questionId] = answerGroup;
          }
        }
        res.json(results);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};