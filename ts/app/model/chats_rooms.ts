import mongoose from 'mongoose';

const Chats_roomsDB = new mongoose.Schema({

    user: { type: String },
    room: { type: String },
    filter: { type: String },
    message: { type: String },
    state: { type: String },

}, { timestamps: true });


Chats_roomsDB.index({ createdAt: 1, });
const Chats_rooms = mongoose.model('Chats_rooms', Chats_roomsDB);

export { Chats_roomsDB, Chats_rooms as default }; 