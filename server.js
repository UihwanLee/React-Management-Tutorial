const express = require('express');
const bodyParser = require('body-Parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': "https://placeimg.com/64/64/1",
            'name': '홍길동',
            'birthday': '990212',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': "https://placeimg.com/64/64/2",
            'name': '이순신',
            'birthday': '980251',
            'gender': '남자',
            'job': '회사원'
        },
        {
            'id': 3,
            'image': "https://placeimg.com/64/64/3",
            'name': '김명동',
            'birthday': '970524',
            'gender': '남자',
            'job': '취준생'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
