const express = require('express');
const app = express();
const { exec } = require('child_process');
app.use(express.urlencoded());

app.post("/auth", function (req, res) {
  /* This server is only available to nginx */
  const streamkey = req.body.key;
  console.log("streamkey", streamkey)
  /* You can make a database of users instead :) */
  if (streamkey === "supersecret") {
    res.status(200).send();
    return;
  }

  /* Reject the stream */
  res.status(403).send();
});

app.post("/end_stream_2", function (req, res) {
  const app = req.body.app;
  const date = new Date();
  const dateString = date.toString();
  // Replace these paths with the actual paths you want to use
  const SOURCE_DIR=`/tmp/hls/${app}`;
  const DEST_DIR=`/tmp/recordings/${app}/${dateString}`

  // Construct the command to execute the script with SOURCE_DIR and DEST_DIR as arguments
  const command = `/tmp/move_hls_to_recordings_live_2.sh "${SOURCE_DIR}" "${DEST_DIR}"`;

  exec(command, (error, stdout, stderr) => {
      if (error) {
          console.error(`Execution error: ${error}`);
          return;
      }
      if (stdout) console.log(`stdout: ${stdout}`);
      if (stderr) console.log(`stderr: ${stderr}`);
  });
});

app.get("/end_stream/:app", function (req, res) {
  const app = req.params.app;
  console.log("app", app);
  const date = new Date();
  const dateString = date.toString();
  // Replace these paths with the actual paths you want to use
  const SOURCE_DIR=`/tmp/hls/${app}`;
  const DEST_DIR=`/tmp/recordings/${app}/${dateString}`

  // Construct the command to execute the script with SOURCE_DIR and DEST_DIR as arguments
  const command = `/tmp/move_hls_to_recordings_live_2.sh "${SOURCE_DIR}" "${DEST_DIR}"`;

  exec(command, (error, stdout, stderr) => {
      if (error) {
          console.error(`Execution error: ${error}`);
          res.status(500).send("Có lỗi xảy ra trong quá trình chuyển file");
          return;
      }
      if (stdout) console.log(`stdout: ${stdout}`);
      if (stderr) console.log(`stderr: ${stderr}`);
      res.status(200).send("Chuyển file thành công");
  });
  });
  
app.listen(8000, function () {
  console.log("Listening on port 8000!");
});