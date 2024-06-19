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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+237651843666";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_55_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDk2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNyxcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDc0LFxuICAgICAgICA1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQyLFxuICAgICAgICA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICA3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNnBmL0hQWmRzUWtOTGNxNkxmNC9mQXZ0NDFJTmV4bHM3UGxhOVlzU2RtZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NTE4NDM2NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU5NTJCMDJGRTIzQ0EyOEY3N0VDRkQyQzQ5RTEzQjZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODc4NzM0MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1MTg0MzY2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUM2RkZBNEIxMEMxNjU4QzJEQUE2MEU5M0JFNEIxQUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4Nzg3MzQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllkZ3hxWUxUVGFLM2p4bDREdWFhWEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTIwMjRmN2QtMGZkZC00YTBiLWFmM2YtMDA5ODgwNDgzMWYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDE4MCxcbiAgICAgIDIzNyxcbiAgICAgIDE4NSxcbiAgICAgIDcyLFxuICAgICAgMjIwLFxuICAgICAgMTQzLFxuICAgICAgMjI5LFxuICAgICAgMTY0LFxuICAgICAgMTUyLFxuICAgICAgMTg0LFxuICAgICAgMjA4LFxuICAgICAgODQsXG4gICAgICAxMjAsXG4gICAgICAyNTAsXG4gICAgICA1MSxcbiAgICAgIDc1LFxuICAgICAgMjA1LFxuICAgICAgOTUsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAxNjcsXG4gICAgICA4OCxcbiAgICAgIDE3NyxcbiAgICAgIDIyMSxcbiAgICAgIDIyMSxcbiAgICAgIDE3LFxuICAgICAgOCxcbiAgICAgIDE3NCxcbiAgICAgIDEwOCxcbiAgICAgIDQyLFxuICAgICAgMTk4LFxuICAgICAgMTk4LFxuICAgICAgNjMsXG4gICAgICAxMjAsXG4gICAgICAxMjcsXG4gICAgICAxNDksXG4gICAgICAyMTUsXG4gICAgICAxMixcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyMktON1RLSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjUxODQzNjY2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhj6LhjqrNss2y4Y6s4Y6h1Y/PtM6dIDJrMjRcIixcbiAgICBcImxpZFwiOiBcIjEzMzQwNjIzMDg4MDQzNToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hY3Zjd0JFSVM2eXJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUHREdmxqUHd4WnBXNUxFUXl4MXowU3JWRVYzSy9yVCtVa2RaNTdTbmNpVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxUjBLWi9pQkF6b250SE5xKyt4VllIMWdvSVZNRmVKaFNsV0hFZ2JzR201bTJ6RVE3azRhTjNNYXlCL3hic0NGYk12UDB6V0tXRWtlT2VkV2w4TGxDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBZTJabG0wWkFKbWdrcEZ4TnhLWERWR0ZScDdWbEtqNW1IYiszSzFxZTFnSTdjejVQR3dUaGRGVGJKbmNZSFFFZHF2ZU8xWGRTemwraGpFQlI2b0xpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTE4NDM2NjY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODc4NzMzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURQWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFBYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT2pMWkJyVG12ZTU4dldpUXN0dTNQdEJaTTdEbXRYYlFJcFNGSmhJbHdNMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mjg4MjIxMTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODc4NzMzOTE5OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
