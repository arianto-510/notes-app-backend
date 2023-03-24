const Hapi = require("@hapi/hapi");
const addNoteHandler = require("./handler");

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 3000,
    handler: addNoteHandler,
  });

  await server.start();
  console.log(`server berjalan di ${server.info.uri}`);
};

init();
