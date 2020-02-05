select assignments.id, name, day, chapter, count(assistance_requests) as total_requests
from assignments
join assistance_requests on assignments.id = assignment_id
group by assignments.id
order by total_requests desc;