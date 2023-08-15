let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐬𝐩𝐨𝐫𝐭_𝐭𝐜_𝐟𝐟: ${pesan}`
let teks = `𝐀𝐍𝐎𝐓𝐄𝐍𝐂𝐄 𝐏𝐋𝐀𝐍𝐓𝐀𝐒 🌱 𝐒𝐈𝐍𝐎 𝐂𝐔𝐏𝐎 𝐃𝐄 𝐔𝐍𝐀 🍂 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝐀𝐍𝐎𝐓𝐀𝐑𝐒𝐄 𝐏𝐋𝐀𝐍𝐓𝐀𝐒 🍁😡😡😡:: \n`
for (let mem of participants) {
teks += `👨🏻‍💻🍁  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐓𝐎𝐑𝐍𝐄𝐎𝐒_𝐀𝐃𝐀𝐍_𝐓𝐂`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
