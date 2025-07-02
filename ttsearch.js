> const res = await fetch(`https://api.asagiofficial.idnet.my.id/search/tiktok?q=kasih%20aba%20aba`);
    const response = await res.json();

    if (!response.status || !Array.isArray(response.result) || response.result.length === 0) {
      return m.reply('Tidak ditemukan hasil untuk pencarian ini.');
    }

    const vid = response.result[Math.floor(Math.random() * response.result.length)];

    const caption = `
🎬 *${vid.title}*
👤 *Creator*: ${vid.author.nickname} (@${vid.author.unique_id})
🎥 *Durasi*: ${vid.duration} detik
👍 *Like*: ${vid.digg_count} | 💬 *Komentar*: ${vid.comment_count}
🔄 *Share*: ${vid.share_count} | ⬇️ *Download*: ${vid.download_count}`;

    conn.sendMessage(m.chat, {
      video: { url: vid.play },
      caption,
      footer: "Pilih format download",
      buttons: [
        {
          buttonId: `.tiktokplay ${text}`,
          buttonText: { displayText: '⏭️ Next Video' },
          type: 1
        }
      ],
      headerType: 1,
      viewOnce: true
    }, { quoted: m });

  }