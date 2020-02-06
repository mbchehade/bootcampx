const { Pool } = require('pg');
//Pool is the preferred way to manage client connections becacuse POOL will
//manage multiple clinet connection for us
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});



const queryString = `
 
SELECT DISTINCT  teachers.name as teacher, cohorts.name as cohort
FROM cohorts
JOIN students ON cohorts.id = cohort_id
JOIN assistance_requests ON students.id = student_id
JOIN teachers ON teachers.id = teacher_id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
  `;

const cohortName = process.argv[2];
const values = [`%${cohortName}%`];

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    })
  })
  .catch(err => console.error('query errpr', err.stack));