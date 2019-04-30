module.exports = ({ name }) => {
return `
<!doctype html>
<html><head>
<meta charset="utf-8">
<title>Certificate</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand:500">
<style>
    @page {
        margin: 0mm;
        size: A4 landscape;
    }
    html,
    body {
        height: 200mm;
        width: 297mm;
        font-family: 'Quicksand', "Helvetica Neue", 'Open Sans', Helvetica, Arial, sans-serif;
    }

    html {
        background: #eaeaea
    }
</style>
</head>

<body style="background-color: white">
<div style="text-align: center;">
    <div style="padding-top:80px;">
        <img src="/img/WFOLogo2Large.png" style="height:200px; width:auto;">
    </div>
    <div style="font-size: 32px; color: #b33f7b; padding-top:30px;">
        <strong>Certification of Workflow e-Learning Completion</strong>
    </div>
    <div style="padding-top: 30px; font-size: 20px;">
        This is to certify that
    </div>
    <div style="padding-top: 30px; font-size: 36px;">
        <div style="border-bottom-style: solid; border-width: 1px; width: 800px; margin-left: auto; margin-right: auto">
        ${name}           </div>
    </div>
    <div style="padding-top: 30px; font-size: 20px;">
        Has completed the Workflow e-Learning modules 1-6
    </div>
</div>

<div style="padding-top: 120px; padding-left:30px; padding-right:30px;">
    <div style="display: inline-block; width:49%">
        <div style="font-size: 24px">
            <strong>Congratulations!</strong>
        </div>
        <div>Dr Paul Deffley, Clinical Lead</div>
        <div style="font-size: 8px;">Copyright © Care Unbound Ltd (t/a Practice Unbound) 2018</div>
    </div>
    <div style="display: inline-block; width:49%">
        <div style="width:220px; margin-left:auto">
            <img src="/img/PracticeUnboundYellow.png">
        </div>
    </div>
</div>
</body></html>
`;
};