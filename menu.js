const { default: makeWASocket } = require('@whiskeysockets/baileys');

async function sendMenu(jid, sock, prefix) {
  const sections = [
    {
      title: '🌟 Sección Principal',
      rows: [
        { title: 'Opción 1 — Info Bot',      rowId: prefix + '1', description: 'Ver información del bot' },
        { title: 'Opción 2 — Comandos',      rowId: prefix + '2', description: 'Listado de comandos' },
        { title: 'Opción 3 — Contacto OSSVI', rowId: prefix + '3', description: 'Mis datos de contacto' },
      ]
    }
  ];

  const listMessage = {
    text: '📋 *Menú OSSVI*',
    footer: 'Selecciona una opción:',
    title: '✨ MENU PRINCIPAL ✨',
    buttonText: 'Ver opciones',
    sections
  };

  await sock.sendMessage(jid, listMessage);
}

module.exports = { sendMenu };
