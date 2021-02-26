const express = require("express");
const app = express();

app.get("/auth", (req, res) => {
    console.log(req);
    console.log("req.query", req.query);
    // res.json({ status: 200, result: "success", ...req.query });
    res.redirect("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Birthday&dates=20210226T193000Z/20210226T223000Z&ctz=Asia/Shanghai&details=With%20clowns%20and%20stuff&location=North%20Pole&crm=AVAILABLE&trp=false&sprop=website:https://www.matrx.io/&sprop=name:matrx&add=isshaohai@163.com,1454598684@qq.com&src=&recur=RRULE:FREQ=DAILY");

});

app.listen(9000, () => {
    console.log("http://localhost:9000");
});
