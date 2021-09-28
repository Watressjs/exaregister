module.exports = {
    bot: {
        botOwner: [""],
        botToken: "",
        botPrefix: "",
        botStatus: "Lexus | Lewis Was Here."
        mongoURL: "mongodb+srv://lewisjs:okan1234@cluster0.o8u51.mongodb.net/kayıtbot?retryWrites=true&w=majority ",
    },
    roles: {
        registerStaff: [],
        manRoles: [], // erkek rolleri
        womanRoles: [], // kız rolleri
        unregisterRoles: [],
        tagRole: "",
        vipRole: "",
        boosterRole: "",
        suspecious: "" // şüpheli hesap rolü
    },
    channels: {
        registerChannel: "",
        rulesChannel: "",
        botVoice: "",

    },
    guild: {
        guildID: "",
        tag: "", // BURAYA İSMİN BAŞINA GELECEK TAG BİRDEN ÇOK TAGINIZ VARSA AŞŞAĞIYA GİRİN
        tagges: [], // BİRDEN ÇOK TAGINIZ VARSA BURAYA GİRİN ÖRNEK: #0001
        defaultTag: "•",
        defaultName: "• İsim | Yaş",
        suspeciousName: "• Şüpheli | Hesap",
    },
    emojis: {
        yes: "",
        no: "",
        // EMOJİLERİN ID GİRCEKSİNİZ SADECE ID
    }

};
