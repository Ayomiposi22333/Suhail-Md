const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349132681483";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "cIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlDUmYzdEliUVhPd1dTREVzQTV5d1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGYyN2IyYjAtYmRlNy00ODdkLTkxOTEtZWU4YjY2NWVhZjE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgOTQsXG4gICAgICA0MSxcbiAgICAgIDE5NCxcbiAgICAgIDE0MixcbiAgICAgIDE4MSxcbiAgICAgIDExOCxcbiAgICAgIDI5LFxuICAgICAgMTMxLFxuICAgICAgMjEsXG4gICAgICAxNDIsXG4gICAgICAxNSxcbiAgICAgIDI1NCxcbiAgICAgIDUsXG4gICAgICA4NyxcbiAgICAgIDIzMixcbiAgICAgIDE3NSxcbiAgICAgIDEzMCxcbiAgICAgIDE1OSxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAyMjAsXG4gICAgICAxMTUsXG4gICAgICAxMjQsXG4gICAgICAxOCxcbiAgICAgIDUzLFxuICAgICAgNSxcbiAgICAgIDU5LFxuICAgICAgMTAxLFxuICAgICAgMTMzLFxuICAgICAgMTQsXG4gICAgICAxNzgsXG4gICAgICAxNTMsXG4gICAgICAyMixcbiAgICAgIDQ0LFxuICAgICAgOTcsXG4gICAgICA3NixcbiAgICAgIDk2LFxuICAgICAgNjQsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHMURXNzhMWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMjY4MTQ4Mzo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA1MzEyNjkwNzUzNzUwOjQ1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfhoPwn4W38J+FtCDwn4W68J+FuPCfhb3wn4W2XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG56NDRrQkVOemZ2cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzUEtZNFpLOC9hWE1SRSswWDBIMVV4U1BpZEt0b3pxZld3SEp5TjlGZkdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndlWVdkRkpGVERYTzRhc0xzK3hLYTFoV2V5L1FqemxDZDkyZExpbUYzemEwcDMvZlVZZW5PWUVvbEZPVkJSVWhaUmxVUkZ3ZXNpMVJuSy9wdWppNEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5oOEhYRVdIU2lYcWkxRGJLWWhGV09Td0hZWVQ5cHNLNzFTSnQ0UTlZMHVLRk5paE5HKzhtYnhFcjlCZDlXSTgyaFh2SUhFdThFRVZIaFh0enNTU0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzI2ODE0ODM6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NDk4NDAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1lyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLWXIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkR24vTWJZK2RscDQ0V3pQczZwdjlsT0NGVVY5TWpsRlFISzJVUC9jdWxvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4ODk0NjYxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NDk4NDAxMTA2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
