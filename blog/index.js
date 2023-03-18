const express = require('express')
const app = express() // thư viện expore lấy function 
const port = 3000 // tên cổng ; 
// route : tuyến đường 
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/xin-chao', (req, res) => {
    res.send('Hello World!' + 'nguyen tuan anh')
})
app.get('/tam-biet', (req, res) => {
    let a = 1;

    res.send('Hello World!' + 'tam biet')
})
// định nghĩa các cổng để lắng nghe 
// ở dòng dưới tức là bạn đang khởi chạy ứng dụng và nó sẽ lắng nghe tại cụ thể cổng port 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})