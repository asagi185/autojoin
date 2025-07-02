> conn.sendMessage(m.chat, {
      video: { url: vid.play },
      caption,
      footer: "Pilih format download",
      buttons: [
        {
          buttonId: `.menu all`,
          buttonText: { displayText: 'ALL MENU KONTOL' },
          type: 1
        }
      ],
      headerType: 1,
      viewOnce: true
    }, { quoted: m }); 