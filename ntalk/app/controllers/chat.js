const crypto = require('crypto');

module.exports = app => {
    const ChatController = {
        index(req, res) {
           const { room } = req.query;
           let hashRoom = room;
           
           if (!hashRoom) {
               const timestamp = Date.now().toString();
               const md5 = crypto.createHash('md5');

               hashRoom = md5.update(timestamp).digest('hex');
           }
           res.render('chat/index', {room: hashRoom});
        }
    }
    return ChatController;
}