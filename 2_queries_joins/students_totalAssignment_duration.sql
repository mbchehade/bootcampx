SELECT sum(assignment_submissions.duration) as assignment_duration
FROM total_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';