module.exports = {
    bot: {
        botOwner: [""],
        botToken: "",
        botPrefix: "",
        botStatus: "Cross was here.",
        mongoURL: "MONGO LİNKİ",
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