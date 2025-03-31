curl -X GET "http://localhost:8000/verify/14641078" -H "Content-Type: application/json"

curl -X POST http://localhost:9000/api/verify/kenyan-id   -H "Content-Type: application/json"   -d '{
    "id": "42027041",
    "idType": "national-id",
    "isSubjectConsent": true
}'