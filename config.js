//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://charlotterose4949:EFAXU88WYFe93fAD@charlotte.2qibyty.mongodb.net/?retryWrites=true&w=majority&appName=Charlotte";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "2349017935543";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVqbjh2blpwQjQ1ZUJXdWd4dkJiaUFLT3RuQVBNOWZjUVdJZTBTT21HMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnBrT3FPS0Q2aEwvczJXNCtDZHdkTHhlcGVjTysvK3VuVzNwaHRPN3hDTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSmtnbGlRbllrRUE0Y3pKSUVPV1FIMGNDdnhCTjZSVVI2enczanhBazFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJdkJkN1dFc1Q5Z0k0blFBNE9jaVpXVk1tNm41V21QanBEZWd5RFZITWpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJR3lmUTAwM0xyS1kzaytRZWhnbHNsTFBPY09rWDgvdGZKOWp2d3RrbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNubmhhd21qT2RzcmdEMzh0ZjMvUlBNRXFtRWRSSTU1eGd6cmVncms1ekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJOcjZkbkczRXh6WDJCWUtMSldHcFNaa1ZQaEFLcU10L2NqM3FLdWNIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3ZQeEFveURnMm90OFFIQU9GNWNiK0RxUVBBQzhxZ0x4L1NaL3Yzd1JrST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRkWlFDbUJRYUJUOWhWZzlJTHhlRVQ3YUhmYXFTeXFZNnMydjVYYWhxRnV0MmpkUTBzY0QvSXZMd2MvWS83clZ2ZFNUQUE3ZktIaVp1VXlWN3FnQWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6ImFrMEtHZGxFZzhUNEZBams2eHRJNVRmazBzbXgzMHd4UTg4NktSNEZOM289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAxNzkzNTU0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTMyMDQzRjEwRDZBNjEzQUQ4OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzcyMDM4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYLWZHNXpGX1FQbTVDNWdhV3NPeUZ3IiwicGhvbmVJZCI6IjMyNGVkNjlhLTFkYjYtNDUyMC05MThlLTljZmMxMmQxZjVhMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyclBoSWdiM25yK0ZwK3ZKTUJXWjBtMnNBTzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXpuV0hiMTVpa21FRGc2ZzV5NGxOc2dkQUg0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFDTVo4RTk5IiwibWUiOnsiaWQiOiIyMzQ5MDE3OTM1NTQzOjc4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8utaO4ZqP4LyI4L+JIPCdk58g8J2ToSDwnZOYIPCdk50g8J2TkiDwnZOUIOKnieGamdaO4riZ4Ly7In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQamR1SzRCRU9yR2hyUUdHQkFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJISEJ4V1NML1RJUUtMcHk2N1p4WGh6Q1ppWjJZUlhJYXVneVVmb0VQdDFzPSIsImFjY291bnRTaWduYXR1cmUiOiJyUEFlQmR6N0s5TXV4VDZ0OVBVWUhxZ1VLSUEwTk5CSUJyLzFTMGl0U2hHMTRrVDRteDVZNHQ4SzV0ek9qd0hpUlRDdjNKTUI1cUZETmlDcWp3ZkpDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibzJpTHB2VThDQWh3bDNSQ0w0cFNXMjB6UmVCbHcwK2RsUUpxbEczeTh0THBDQWo2OVZVd3ZGakVhaTJ5WGZ2WVVHZmJtRXUyT0huU2laZm1LK2tmanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDE3OTM1NTQzOjc4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJ4d2NWa2kvMHlFQ2k2Y3V1MmNWNGN3bVltZG1FVnlHcm9NbEg2QkQ3ZGIifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTc3MjIxNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEa1kifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ⒷⓎ 𝓟 𝓡 𝓘 𝓝 𝓒 𝓔",
  author: process.env.PACK_AUTHER || "ⒷⓎ 𝓟 𝓡 𝓘 𝓝 𝓒 𝓔",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "🅿🆁🅸🅽🅲🅴 🅱🅾🆃",
  ownername: process.env.OWNER_NAME || "𝓟 𝓡 𝓘 𝓝 𝓒 𝓔",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
