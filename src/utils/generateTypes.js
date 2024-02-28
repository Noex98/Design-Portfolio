const exec = require("child_process").exec;

const spaceId = process.env.SPACE;
const accessToken = process.env.ACCESS_TOKEN;
const command = `cf-content-types-generator --spaceId=${spaceId} --accessToken=${accessToken} --output=types/generated.ts`;

console.log("Generating types from contentful...");
console.log(process.env.SPACE);
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
