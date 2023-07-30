# API Study

Languages example: 

- typescript
- python
- golang

# Execute and test

### Install Service Test API
Choose below the your preference


- https://insomnia.rest
- https://www.postman.com/


# Running

Access folder root api and execute

  **Python** <br>
  - `pip3 install flask` <br>
  - `python api.py`
<br>


  **TypeScript** <br>
- `npm install express typescript ts-node @types/express
`
<br>
- `node dist/app.js`

**Golang**<br>
`go run main.go`

## Use payload json below

```json
{
  "name": "NAME"
}
```

## Test in CLI


```ssh 
curl -X POST -H "Content-Type: application/json" -d '{"name": "John"}' http://localhost:8080/person
```

If sucess return
```ssh
{"message":"Hello NAME"}
```


