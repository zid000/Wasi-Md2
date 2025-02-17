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
global.allowJids = process.env.ALLOW_JID || "923247116683@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923247116683";
global.owner = process.env.OWNER_NUMBER || "923247116683";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09Wa3pvWU9VNHdXY3NFdEc4U3d3TXZMaFRCVWU4MkhrYUFoQ3V3UlpIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUm1KNWRSeGdEbWo3dmhEMzd6cUs1OUw4Z1l2bC9qUHQycmpId1IzYkNCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQlZEVzJMNkN4STZGRkV5RzVIV1hCeVJKajVXTk1OeGJRTVhJdzNvRUZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoR2FUcEpSVnQveWp0OTVoUi9Oa2E3d05TUll0ZUV6RFdjMVJtNWJGVmt3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPQ2JpZ3lpREFkSXgwbFpxdFRQYVlrakpvZUFoWWIwNDlickJkaFFuMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV1QVB5RE41azdjYjd4dmxrRW5tQW11UVhCa3drVHlWbU9wVVIzYkZxaEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdDQTUwbkpOMmR6RWtMSmdJNEN5Y3NiS0tsRkdYRUJRY2xGNlY1N3RWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGVUdHljRlZtM1pZNWY0b1lRSVEyajZvaDR4RnBmQjFmdy9JblBUU2pscz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InozSWJFdmQ1ZngrZmVvcnhhRldOc1cyYVVnSUdkZ3JPVmhFUUMxdjcxTnZyeUhaQUwrRytnNzh1RFN4WjB3WXVVVmVwTEtBVVJYU1ZxOGpwSEV6cEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6Im1rUlY1VDVjamN4ZmZMbFV2Vk1XZndIZmFBWi9Dck1GVitFTU9xYnVsSzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Img2NVplZkVOUjJLOWQ2d0l1WGpWMXciLCJwaG9uZUlkIjoiZTZiYjNiZjQtMmJhNC00NzhhLTlmZTQtMDYxYjZlMzhjZDIzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFMVHAyQzRRU1NIZWVlWHdyM3Y3M1dMbFhJMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXL3VnTTI0YUVWb1l4UFlZRktzVXN6UVRKbDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMkJBSjlTODEiLCJtZSI6eyJpZCI6IjkyMzI0NzExNjY4MzoyOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLYttmA2YDZgNmA2YDZgNuk2YDZgOCjttmA2YDYr9uMINmF2YDZgNmE2YDZgNqpIFxu4oG5XG7CslxuwrNcbsKyXG7igbRcbuKBt1xuwrlcbsK5XG7igbZcbuKBtlxu4oG4XG7Cs1xuXG5cbvCdkIvwnZCE8J2QhvCdkITwnZCN8J2QgyDwnZCI8J2QjfCdkJLwnZCI8J2Qg/CdkITigbDCucKyXG5cblxuXG5cblxuPDMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01INStkVUNFS0hqemIwR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Illtd25ERGhsTlZvcEwySnVnenRSSE1NTEpLN2E4YkVGaCszMmlwck9YeUVPclM1Ym1vb0ozVWxnVlgzc3BOaTBaSEdPclNHeFpkNUsxNkFYaEZIZ0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkWHZCOGVoend4YlBERkttYkQzdlg0bVpsaWFpQUVoRHdUdlQxaGtDclppNG1MZmVIeWViRTFId3VFc25JSUMweUIwMUtJcWV1WlBvakJVNUUrN09BUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI0NzExNjY4MzoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTTVaa0FYTkVqa0NkelpsTGFreTdEWjB1VXF5eHhKWTFHaDIzVTRlbkExIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5ODEzMjk2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9xQyJ9"
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
  errorChat: process.env.ERROR_CHAT || "923247116683",
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
