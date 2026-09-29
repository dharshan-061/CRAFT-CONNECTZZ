/**
 * CraftConnect - Voice-First Indian Artisan Marketplace
 * JavaScript Engine: Tri-lingual Localization (Tamil, Hindi, English), Web Speech API,
 * AI Fair-Wage Calculator, Voice Onboarding, Order Notifications, Sound Synthesis & Interactive UI.
 */

// ==========================================================================
// 1. LOCALIZATION DICTIONARY (English, Hindi, Tamil)
// ==========================================================================
const TRANSLATIONS = {
    en: {
        tagline: "Voice Marketplace for Indian Artisans",
        artisanMode: "Artisan Studio",
        buyerMode: "Buyer Market",
        audioGuideTooltip: "Audio Guide",
        verifiedBadge: "GI Master Weaver",
        voiceFirstBadge: "Voice-First AI",
        speakToSellMain: "🎤 Speak to Sell",
        onboardBtn: "Join Studio",
        navDashboard: "Dashboard",
        navCreateListing: "Speak to Sell",
        navMarketplace: "Marketplace",
        navOrders: "Orders",
        navFairPrice: "AI Fair Price",
        navProfile: "My Profile",
        navHelpPrompt: "Just speak to add products, check money, or update orders.",
        tryVoiceNow: "Try Voice",
        namasteBadge: "🙏 Namaste & Welcome",
        dashSubtitle: "Your voice-powered handicraft studio is live. You have 3 active orders to ship today.",
        heroVoiceBtn: "🎤 Speak to Sell New Craft",
        listenDailyDigest: "🔊 Listen to Daily Audio Digest",
        thisMonthIncome: "This Month's Earnings",
        noMiddleman: "Direct to Bank/UPI",
        viewPayouts: "Payouts",
        tileSpeakSellTitle: "1. Speak to Sell",
        tileSpeakSellDesc: "Describe your craft by voice. AI creates price, title & description.",
        tileOrdersTitle: "2. Active Orders",
        tileOrdersDesc: "Listen to buyer details and dispatch sarees & pottery today.",
        tileFairPriceTitle: "3. AI Fair Price",
        tileFairPriceDesc: "Calculate fair wages for labor hours & raw silk/clay cost.",
        tileStoryTitle: "4. My Craft Story",
        tileStoryDesc: "Your voice recording is played to buyers worldwide.",
        urgentOrdersTitle: "Urgent Orders to Dispatch",
        urgentOrdersSubtitle: "Click speaker to hear buyer voice instructions",
        viewAllOrders: "View All (3)",
        incomeSummaryTitle: "Artisan Income & Fair Wage",
        incomeSummarySubtitle: "Direct UPI Bank Transfers • 0% Middleman Cut",
        testAlert: "Test Alert",
        totalCraftsSold: "Total Crafts Sold",
        items: "items",
        avgLaborWage: "Your Hourly Wage",
        nextPayout: "Next Bank Payout",
        wageComparisonTitle: "CraftConnect Fair Value vs Traditional Middleman",
        traditionalTrader: "Middleman / Wholesale Trader:",
        craftConnectDirect: "CraftConnect Direct Buyer:",
        giProtectionText: "Protected by Geographical Indication (GI) Authenticity AI Verification.",
        myActiveListings: "My Active Handmade Crafts",
        myActiveListingsSub: "Handmade by you • Visible to buyers across India & globally",
        addNewCraft: "Add New Craft",
        step1Title: "Voice Pitch",
        step2Title: "Photos & Craft",
        step3Title: "AI Fair Price",
        voiceGuideStep1: "Press the big microphone and tell us what you made! Speak in Tamil, Hindi or English.",
        tapToSpeak: "Tap to Speak",
        aiListeningStatus: "Ready to Listen",
        reset: "Reset",
        quickPresetsTitle: "Or tap a quick craft template to auto-populate:",
        presetSaree: "Kanchipuram Silk Saree",
        presetPottery: "Terracotta Clay Water Jug",
        presetWood: "Carved Teakwood Box",
        presetZardozi: "Zardozi Embroidery Shawl",
        aiDetectedDetails: "AI Detected Craft Parameters",
        craftTitleLabel: "Craft Name:",
        craftCategoryLabel: "Category:",
        craftTimeLabel: "Hours Worked:",
        craftMaterialCostLabel: "Raw Material Cost (₹):",
        previous: "Back",
        nextPhotos: "Next: Add Photos & Story",
        uploadPhotosTitle: "📸 Upload Craft Photos & Record Story",
        uploadPhotosSub: "Take photos with your phone camera. AI automatically verifies authentic textures.",
        cameraClickTitle: "Click to Open Camera or Choose Photo",
        cameraClickSub: "High resolution captures fabric weaves & clay finish",
        chooseSamplePhoto: "Use Sample Craft Photo",
        photosGalleryTitle: "Selected Craft Photos (Click to preview):",
        mainCover: "Main Cover",
        detailAngle: "Detail Angle",
        addMorePhoto: "Add Photo",
        aiVisionHeader: "AI Vision Authenticity Analysis:",
        recordStoryTitle: "Record Your Craft Story (Audio)",
        recordStorySub: "Buyers love hearing the heritage, weaver lineage, and care instructions directly from your voice!",
        recordVoiceStory: "Record 30-sec Story",
        previewAudioStory: "Listen Preview",
        nextPricing: "Next: AI Fair-Price Guarantee",
        aiFairWageIndex: "AI Fair-Wage Calculation",
        pricingHeaderTitle: "Transparent Fair Price Recommendation",
        pricingHeaderSub: "We calculate fair artisan living wages based on your exact craft hours, material costs, and market demand.",
        materialCostSlider: "Raw Material Cost:",
        laborHoursSlider: "Artisan Crafting Hours:",
        craftIntricacySlider: "Craft Intricacy & Skill Level:",
        giCertifiedPremium: "GI Tag Certification Verified",
        giCertifiedPremiumSub: "+25% premium for authentic regional handicraft origin",
        aiFairSuggestedPrice: "AI Fair-Market Recommended Price",
        rawMaterials: "Raw Materials",
        artisanLabor: "Artisan Fair Labor (₹250/hr)",
        giSkillPremium: "GI Heritage & Skill Premium",
        yourNetProfit: "Your Direct Earnings",
        finalSellingPriceLabel: "Your Final Selling Price (₹):",
        priceAdvice: "✨ Protected by CraftConnect 0% Middleman Guarantee",
        publishListingBtn: "🎉 Publish to Marketplace with Voice",
        directFromMakers: "100% Direct From Rural Indian Makers",
        marketTitle: "Discover Authentic Indian Handicrafts",
        marketSub: "Every craft item features the maker's authentic voice story, GI origin certification, and fair-wage verification.",
        voiceSearch: "Voice Search",
        catAll: "All Crafts",
        catSarees: "Handloom Sarees",
        catPottery: "Terracotta Pottery",
        catWood: "Hand-Carved Wood",
        catEmbroidery: "Zardozi & Embroidery",
        catMetal: "Brass & Dhokra Art",
        ordersPageTitle: "📦 Orders & Dispatch Manager",
        ordersPageSub: "Manage customer orders. Use voice commands to mark orders packed or picked up.",
        voiceUpdateOrder: "🎤 Speak to Update Status",
        allOrdersTab: "All Orders",
        pendingCraftingTab: "In Crafting / Loom",
        packedTab: "Ready for Pickup",
        dispatchedTab: "In Transit",
        smartWageTool: "Smart Fair-Wage Calculator",
        toolTitle: "Artisan Fair Labor & Craft Wage Estimator",
        toolSub: "Protect yourself against low trader offers. Calculate true market value before agreeing to sell wholesale or retail.",
        enterCraftParams: "Enter Craft Parameters",
        selectCraftType: "Type of Handicraft:",
        rawMaterialCostLabel: "Raw Material Cost (Silk, Yarn, Clay, Wood, Inks):",
        artisanHoursLabel: "Total Labor Hours Spent:",
        masteryLevelLabel: "Artisan Experience / GI Heritage:",
        speakPriceAdviceBtn: "🔊 Speak Price Advice in My Language",
        fairPriceGuarantee: "Certified Fair Value",
        minimumSafeSellPrice: "Minimum Safe Price:",
        guaranteedWage: "Guaranteed Artisan Hourly Wage:",
        traderOfferComparison: "Usual Trader / Middleman Price:",
        aiNegotiationTip: "AI Negotiation Advice:",
        negotiationAdviceDefault: '"Never sell this craft below ₹7,800. The pure silk yarn and 36 hours of hand jacquard weaving justify a premium market price."',
        profileHeritage: "4th Generation Master Weaver • Kanchipuram Weavers Cooperative",
        yearsExperience: "Years Crafting",
        craftsSold: "Crafts Sold",
        buyerRating: "Buyer Rating",
        fairWageVerified: "Fair Wage Verified",
        addListingProfile: "Add Listing",
        bankUpiSettings: "Bank / UPI",
        artisanAudioStoryHeader: "My Craft Story & Heritage (Audio)",
        artisanAudioStorySub: "Recorded in Tamil with AI subtitle translations in Hindi & English",
        reRecordStory: "Re-record Story",
        storyTrackTitle: '"The Loom of Ancestors: 4 Generations of Silk Weaving"',
        voiceStoryTranscript: "Artisan's Spoken Words",
        profileStoryTranscriptText: '"I started weaving when I was 12 years old alongside my mother. Every pure silk saree takes over 14 days on our traditional pit loom. When you buy our saree, you keep our 150-year-old family weaving heritage alive."',
        myGalleryTitle: "Craft Portfolio & Masterpieces",
        myGallerySub: "All products listed with direct buyer checkout",
        vaaniBadge: "Voice AI",
        vaaniListening: "Listening... Speak now",
        trySaying: "Try saying or tap:",
        cmdSellSaree: '"Sell Kanchipuram Saree"',
        cmdCheckOrders: '"Check my orders"',
        cmdCheckEarnings: '"How much did I earn?"',
        cmdHowToUse: '"How does CraftConnect work?"',
        pauseMic: "Pause Mic",
        executeCommand: "Process",
        newOrderAlertTitle: "🎉 New Voice Order Received!",
        accept: "Accept",
        bankModalTitle: "Direct Artisan Bank & UPI Account",
        bankModalSub: "Payments from buyers are deposited instantly into this bank account without middlemen commissions.",
        artisanUpiLabel: "UPI ID (Google Pay / PhonePe / Paytm):",
        bankAccountLabel: "Bank Account Number:",
        bankIfscLabel: "IFSC Code:",
        saveAccount: "Save & Verify Account",
        dailyVoiceDigest: "Namaste Devi Ammal. Today you have 3 pending orders for silk sarees. Your earnings this month stand at 38,450 rupees. Kanchipuram silk demand is currently up by 30 percent in Mumbai and Bangalore."
    },

    hi: {
        tagline: "भारतीय कारीगरों के लिए आवाज़ से चलने वाला बाज़ार",
        artisanMode: "कारीगर स्टूडियो",
        buyerMode: "खरीदार बाज़ार",
        audioGuideTooltip: "ऑडियो गाइड",
        verifiedBadge: "जीआई मास्टर बुनकर",
        voiceFirstBadge: "वॉइस-फर्स्ट एआई",
        speakToSellMain: "🎤 बोलकर बेचें",
        onboardBtn: "स्टूडियो जुड़ें",
        navDashboard: "डैशबोर्ड",
        navCreateListing: "बोलकर बेचें",
        navMarketplace: "बाज़ार",
        navOrders: "आदेश (Orders)",
        navFairPrice: "उचित मूल्य कैलकुलेटर",
        navProfile: "मेरी प्रोफाइल",
        navHelpPrompt: "सामान जोड़ने, कमाई देखने या ऑर्डर अपडेट करने के लिए बस बोलें।",
        tryVoiceNow: "आवाज़ आज़माएं",
        namasteBadge: "🙏 नमस्ते एवं स्वागत है",
        dashSubtitle: "आपका वॉइस-संचालित हस्तशिल्प स्टूडियो चालू है। आज भेजने के लिए आपके पास 3 सक्रिय ऑर्डर हैं।",
        heroVoiceBtn: "🎤 नया सामान बोलकर बेचें",
        listenDailyDigest: "🔊 दैनिक ऑडियो समाचार सुनें",
        thisMonthIncome: "इस महीने की कुल कमाई",
        noMiddleman: "सीधे बैंक/यूपीआई में",
        viewPayouts: "भुगतान",
        tileSpeakSellTitle: "1. बोलकर बेचें",
        tileSpeakSellDesc: "अपनी कला के बारे में बोलें। एआई खुद कीमत, नाम और विवरण लिख देगा।",
        tileOrdersTitle: "2. सक्रिय ऑर्डर",
        tileOrdersDesc: "ग्राहक की जानकारी सुनें और आज ही साड़ियां व मिट्टी के बर्तन भेजें।",
        tileFairPriceTitle: "3. उचित मजदूरी एआई",
        tileFairPriceDesc: "काम के घंटे और कच्चे माल के आधार पर अपना सही मूल्य जानें।",
        tileStoryTitle: "4. मेरी शिल्प कहानी",
        tileStoryDesc: "आपकी आवाज़ की रिकॉर्डिंग दुनिया भर के खरीदार सुन सकते हैं।",
        urgentOrdersTitle: "भेजने के लिए जरूरी ऑर्डर",
        urgentOrdersSubtitle: "ग्राहक की आवाज़ सुनने के लिए स्पीकर पर क्लिक करें",
        viewAllOrders: "सभी देखें (3)",
        incomeSummaryTitle: "कारीगर आय एवं उचित मजदूरी",
        incomeSummarySubtitle: "सीधे बैंक ट्रांसफर • 0% बिचौलिया कमीशन",
        testAlert: "आवाज़ अलर्ट जांचें",
        totalCraftsSold: "कुल बेचे गए उत्पाद",
        items: "सामान",
        avgLaborWage: "आपकी प्रति घंटा मजदूरी",
        nextPayout: "अगला बैंक भुगतान",
        wageComparisonTitle: "क्राफ्टकनेक्ट उचित मूल्य बनाम पुराना बिचौलिया",
        traditionalTrader: "दलाल / थोक व्यापारी की कीमत:",
        craftConnectDirect: "क्राफ्टकनेक्ट सीधा खरीदार:",
        giProtectionText: "भौगोलिक संकेत (GI) प्रमाणन और एआई द्वारा संरक्षित।",
        myActiveListings: "मेरे सक्रिय हस्तशिल्प उत्पाद",
        myActiveListingsSub: "आपके हाथों से बने • भारत और दुनिया भर के खरीदारों को उपलब्ध",
        addNewCraft: "नया उत्पाद जोड़ें",
        step1Title: "बोलकर बताएं",
        step2Title: "फोटो और कहानी",
        step3Title: "उचित मूल्य तय करें",
        voiceGuideStep1: "बड़े माइक बटन को दबाएं और बताएं आपने क्या बनाया है! तमिल, हिंदी या अंग्रेजी में बोलें।",
        tapToSpeak: "बोलने के लिए दबाएं",
        aiListeningStatus: "सुनने के लिए तैयार",
        reset: "रीसेट करें",
        quickPresetsTitle: "या तुरंत भरने के लिए किसी एक पर क्लिक करें:",
        presetSaree: "कांचीपुरम सिल्क साड़ी",
        presetPottery: "टेराकोटा मिट्टी का सुराही/जग",
        presetWood: "नक्काशीदार सागवान का डिब्बा",
        presetZardozi: "जरदोजी कढ़ाई वाली शॉल",
        aiDetectedDetails: "एआई द्वारा पहचाने गए विवरण",
        craftTitleLabel: "उत्पाद का नाम:",
        craftCategoryLabel: "श्रेणी (Category):",
        craftTimeLabel: "बनाने में लगे घंटे:",
        craftMaterialCostLabel: "कच्चे माल की लागत (₹):",
        previous: "पीछे जाएं",
        nextPhotos: "अगला: फोटो और कहानी जोड़ें",
        uploadPhotosTitle: "📸 शिल्प की फोटो अपलोड करें और कहानी रिकॉर्ड करें",
        uploadPhotosSub: "मोबाइल कैमरे से फोटो लें। एआई खुद प्रामाणिक बनावट की पुष्टि करता है।",
        cameraClickTitle: "कैमरा खोलने या फोटो चुनने के लिए क्लिक करें",
        cameraClickSub: "साड़ी की बुनाई और मिट्टी की चमक साफ दिखेगी",
        chooseSamplePhoto: "सैंपल फोटो का उपयोग करें",
        photosGalleryTitle: "चुनी गई तस्वीरें:",
        mainCover: "मुख्य फोटो",
        detailAngle: "बारीकी का दृश्य",
        addMorePhoto: "फोटो जोड़ें",
        aiVisionHeader: "एआई प्रामाणिकता विश्लेषण:",
        recordStoryTitle: "अपनी शिल्प कहानी रिकॉर्ड करें (ऑडियो)",
        recordStorySub: "खरीदार सीधे आपकी आवाज़ में विरासत और देखभाल के तरीके सुनना पसंद करते हैं!",
        recordVoiceStory: "30 सेकंड की कहानी रिकॉर्ड करें",
        previewAudioStory: "कहानी सुनें",
        nextPricing: "अगला: उचित मूल्य गारंटी",
        aiFairWageIndex: "एआई उचित मजदूरी गणना",
        pricingHeaderTitle: "पारदर्शी और उचित मूल्य सिफारिश",
        pricingHeaderSub: "हम यह सुनिश्चित करते हैं कि आपको कभी कम पैसे न मिलें। आपके घंटों और लागत का पूरा हक।",
        materialCostSlider: "कच्चे माल की लागत:",
        laborHoursSlider: "शिल्प बनाने में लगे घंटे:",
        craftIntricacySlider: "कारीगरी का स्तर:",
        giCertifiedPremium: "जीआई (GI) टैग प्रमाणित",
        giCertifiedPremiumSub: "पारंपरिक विरासत के लिए +25% अतिरिक्त प्रीमियम",
        aiFairSuggestedPrice: "एआई द्वारा अनुशंसित उचित मूल्य",
        rawMaterials: "कच्चा माल",
        artisanLabor: "कारीगर की उचित मजदूरी (₹250/घंटा)",
        giSkillPremium: "जीआई विरासत एवं कौशल बोनस",
        yourNetProfit: "आपकी सीधी कमाई",
        finalSellingPriceLabel: "आपकी अंतिम बिक्री कीमत (₹):",
        priceAdvice: "✨ क्राफ्टकनेक्ट 0% दलाली गारंटी द्वारा सुरक्षित",
        publishListingBtn: "🎉 आवाज़ के साथ बाज़ार में प्रकाशित करें",
        directFromMakers: "100% सीधे ग्रामीण भारतीय कारीगरों से",
        marketTitle: "प्रामाणिक भारतीय हस्तशिल्प खोजें",
        marketSub: "हर उत्पाद में कारीगर की वास्तविक आवाज़ की कहानी, जीआई प्रमाणन और उचित मूल्य जुड़ा है।",
        voiceSearch: "बोलकर खोजें",
        catAll: "सभी शिल्प",
        catSarees: "हथकरघा साड़ियां",
        catPottery: "मिट्टी के बर्तन",
        catWood: "लकड़ी की नक्काशी",
        catEmbroidery: "जरदोजी और कढ़ाई",
        catMetal: "पीतल और ढोकरा कला",
        ordersPageTitle: "📦 ऑर्डर और डिलीवरी प्रबंधक",
        ordersPageSub: "ग्राहकों के ऑर्डर संभालें। पैक या डिस्पैच करने के लिए बोलकर स्टेटस बदलें।",
        voiceUpdateOrder: "🎤 बोलकर स्थिति अपडेट करें",
        allOrdersTab: "सभी ऑर्डर",
        pendingCraftingTab: "करघे पर / तैयार हो रहा",
        packedTab: "पैक हो चुका",
        dispatchedTab: "रास्ते में है",
        smartWageTool: "स्मार्ट उचित मजदूरी कैलकुलेटर",
        toolTitle: "कारीगर श्रम और शिल्प मूल्य कैलकुलेटर",
        toolSub: "व्यापारियों के कम दामों से खुद को बचाएं। बेचने से पहले अपनी मेहनत का सही मूल्य जानें।",
        enterCraftParams: "शिल्प का विवरण दर्ज करें",
        selectCraftType: "शिल्प का प्रकार:",
        rawMaterialCostLabel: "कच्चा माल खर्च (रेशम, धागा, मिट्टी, लकड़ी):",
        artisanHoursLabel: "काम में लगे कुल घंटे:",
        masteryLevelLabel: "कारीगर का अनुभव / विरासत:",
        speakPriceAdviceBtn: "🔊 मेरी भाषा में मूल्य सलाह सुनें",
        fairPriceGuarantee: "प्रमाणित उचित मूल्य",
        minimumSafeSellPrice: "न्यूनतम सुरक्षित मूल्य:",
        guaranteedWage: "गारंटीशुदा प्रति घंटा मजदूरी:",
        traderOfferComparison: "दलाल या व्यापारी की सामान्य पेशकश:",
        aiNegotiationTip: "एआई मोलभाव सलाह:",
        negotiationAdviceDefault: '"इस उत्पाद को ₹7,800 से कम में कभी न बेचें। शुद्ध रेशम और 36 घंटे की हथकरघा बुनाई प्रीमियम मूल्य के हकदार हैं।"',
        profileHeritage: "चौथी पीढ़ी के मास्टर बुनकर • कांचीपुरम वीवर्स कोऑपरेटिव",
        yearsExperience: "साल का अनुभव",
        craftsSold: "उत्पाद बेचे",
        buyerRating: "ग्राहक रेटिंग",
        fairWageVerified: "उचित मजदूरी प्रमाणित",
        addListingProfile: "नया उत्पाद",
        bankUpiSettings: "बैंक / यूपीआई",
        artisanAudioStoryHeader: "मेरी शिल्प कहानी और विरासत (ऑडियो)",
        artisanAudioStorySub: "तमिल में रिकॉर्ड किया गया, हिंदी और अंग्रेजी में अनुवाद उपलब्ध",
        reRecordStory: "दोबारा रिकॉर्ड करें",
        storyTrackTitle: '"पूर्वजों का करघा: रेशम बुनाई की 4 पीढ़ियां"',
        voiceStoryTranscript: "कारीगर के अपने शब्द",
        profileStoryTranscriptText: '"मैंने 12 साल की उम्र में अपनी माँ के साथ बुनाई शुरू की थी। हर शुद्ध रेशम साड़ी को पारंपरिक करघे पर बनाने में 14 दिन लगते हैं। जब आप हमारी साड़ी खरीदते हैं, तो हमारे 150 साल पुराने परिवार के हुनर को जिंदा रखते हैं।"',
        myGalleryTitle: "शिल्प पोर्टफोलियो एवं कृतियां",
        myGallerySub: "सभी उत्पाद सीधे खरीदार चेकआउट के लिए सूचीबद्ध हैं",
        vaaniBadge: "वॉइस एआई",
        vaaniListening: "सुन रहा हूँ... अब बोलें",
        trySaying: "यह बोलें या क्लिक करें:",
        cmdSellSaree: '"कांचीपुरम साड़ी बेचें"',
        cmdCheckOrders: '"मेरे ऑर्डर दिखाओ"',
        cmdCheckEarnings: '"मेरी कमाई कितनी हुई?"',
        cmdHowToUse: '"क्राफ्टकनेक्ट कैसे काम करता है?"',
        pauseMic: "माइक रोकें",
        executeCommand: "आगे बढ़ें",
        newOrderAlertTitle: "🎉 नया वॉइस ऑर्डर मिला!",
        accept: "स्वीकार करें",
        bankModalTitle: "कारीगर का बैंक और यूपीआई खाता",
        bankModalSub: "खरीदारों से भुगतान बिना किसी बिचौलिए की कटौती के तुरंत आपके बैंक खाते में जमा किया जाता है।",
        artisanUpiLabel: "यूपीआई आईडी (Google Pay / PhonePe):",
        bankAccountLabel: "बैंक खाता संख्या:",
        bankIfscLabel: "आईएफएससी कोड (IFSC):",
        saveAccount: "खाता सहेजें और सत्यापित करें",
        dailyVoiceDigest: "नमस्ते देवी अम्मल। आज आपके पास सिल्क साड़ियों के 3 नए ऑर्डर हैं। इस महीने आपकी कुल कमाई 38,450 रुपये हो चुकी है। मुंबई और बैंगलोर में कांचीपुरम सिल्क की मांग 30 प्रतिशत बढ़ गई है।"
    },

    ta: {
        tagline: "இந்திய கைவினைஞர்களுக்கான குரல் வழி சந்தை",
        artisanMode: "கைவினைஞர் கூடம்",
        buyerMode: "வாங்குவோர் சந்தை",
        audioGuideTooltip: "குரல் வழிகாட்டி",
        verifiedBadge: "புவிசார் குறியீடு நெசவாளர்",
        voiceFirstBadge: "குரல்-முதல் செயற்கை நுண்ணறிவு",
        speakToSellMain: "🎤 பேசி விற்க",
        onboardBtn: "கூடத்தில் இணைய",
        navDashboard: "முகப்பு பலகை",
        navCreateListing: "பேசி விற்க",
        navMarketplace: "சந்தை",
        navOrders: "ஆர்டர்கள்",
        navFairPrice: "நியாய விலை கால்குலேட்டர்",
        navProfile: "என் சுயவிவரம்",
        navHelpPrompt: "பொருட்கள் சேர்க்க, வருமானம் பார்க்க, ஆர்டர் நிலையை மாற்ற பேசிப் பாருங்கள்.",
        tryVoiceNow: "குரலை முயற்சிக்க",
        namasteBadge: "🙏 வணக்கம் & நல்வரவு",
        dashSubtitle: "உங்கள் குரல் வழி கைவினை கூடம் இயங்குகிறது. இன்று அனுப்ப 3 ஆர்டர்கள் காத்திருக்கின்றன.",
        heroVoiceBtn: "🎤 புதிய பொருளை பேசி விற்க",
        listenDailyDigest: "🔊 தினசரி குரல் செய்தியைக் கேளுங்கள்",
        thisMonthIncome: "இந்த மாத வருமானம்",
        noMiddleman: "நேரடி வங்கி/UPI வரவு",
        viewPayouts: "பணம் பெறுதல்",
        tileSpeakSellTitle: "1. பேசி விற்க",
        tileSpeakSellDesc: "பொருளைப் பற்றி குரலில் சொல்லுங்கள். விலை மற்றும் விவரங்களை AI எழுதும்.",
        tileOrdersTitle: "2. புதிய ஆர்டர்கள்",
        tileOrdersDesc: "வாங்குபவர் தகவல்களைக் கேட்டு புடவை, மண்பாண்டங்களை இன்றே அனுப்புங்கள்.",
        tileFairPriceTitle: "3. நியாய கூலி AI",
        tileFairPriceDesc: "நேரம் மற்றும் மூலப்பொருள் செலவிற்கு ஏற்ப சரியான விலையை அறியுங்கள்.",
        tileStoryTitle: "4. கைவினை குரல் கதை",
        tileStoryDesc: "உங்கள் குரல் பதிவு உலகம் முழுவதும் உள்ள வாங்குபவர்களுக்கு ஒலிக்கும்.",
        urgentOrdersTitle: "உடனே அனுப்ப வேண்டிய ஆர்டர்கள்",
        urgentOrdersSubtitle: "வாங்குபவர் குரல் குறிப்பை கேட்க ஸ்பீக்கரை அழுத்தவும்",
        viewAllOrders: "அனைத்தையும் காண்க (3)",
        incomeSummaryTitle: "கைவினைஞர் வருமானம் & நியாய கூலி",
        incomeSummarySubtitle: "நேரடி வங்கி பரிமாற்றம் • இடைத்தரகர் கமிஷன் 0%",
        testAlert: "குரல் அறிவிப்பு சோதனை",
        totalCraftsSold: "விற்பனையான பொருட்கள்",
        items: "எண்ணிக்கை",
        avgLaborWage: "உங்கள் மணிநேர ஊதியம்",
        nextPayout: "அடுத்த வங்கி வரவு",
        wageComparisonTitle: "கிராஃப்ட்கனெக்ட் நியாய விலை vs பழைய இடைத்தரகர்",
        traditionalTrader: "இடைத்தரகர் / மொத்த வியாபாரி தரும் விலை:",
        craftConnectDirect: "கிராஃப்ட்கனெக்ட் நேரடி வாங்குபவர்:",
        giProtectionText: "புவிசார் குறியீடு (GI) மற்றும் AI சரிபார்ப்பு மூலம் பாதுகாக்கப்பட்டது.",
        myActiveListings: "விற்பனைக்கு உள்ள என் கைவினைப் பொருட்கள்",
        myActiveListingsSub: "உங்கள் கைவண்ணத்தில் உருவானவை • உலகளவில் விற்பனைக்கு தயார்",
        addNewCraft: "புதிய பொருள் சேர்க்க",
        step1Title: "குரல் மூலம் சொல்",
        step2Title: "புகைப்படம் & கதை",
        step3Title: "நியாய விலை நிர்ணயம்",
        voiceGuideStep1: "பெரிய மைக் பொத்தானை அழுத்தி நீங்கள் செய்த கைவினைப் பொருளைப் பற்றி தமிழில் பேசுங்கள்.",
        tapToSpeak: "பேச அழுத்தவும்",
        aiListeningStatus: "கேட்க தயாராக உள்ளது",
        reset: "மீட்டமை",
        quickPresetsTitle: "அல்லது உடனே நிரப்ப இதில் ஒன்றை தொடுங்கள்:",
        presetSaree: "காஞ்சிபுரம் பட்டுப் புடவை",
        presetPottery: "சுடுமண் கூஜா / பாண்டம்",
        presetWood: "தேக்கு மர செதுக்கல் பெட்டி",
        presetZardozi: "ஜர்தோசி வேலைப்பாடு சால்வை",
        aiDetectedDetails: "AI கண்டறிந்த விவரங்கள்",
        craftTitleLabel: "பொருளின் பெயர்:",
        craftCategoryLabel: "பிரிவு:",
        craftTimeLabel: "உழைத்த மணிநேரம்:",
        craftMaterialCostLabel: "மூலப்பொருள் செலவு (₹):",
        previous: "பின்னே செல்",
        nextPhotos: "அடுத்து: படம் & கதை சேர்க்க",
        uploadPhotosTitle: "📸 புகைப்படங்களை பதிவேற்றி குரல் கதையை பதிவு செய்க",
        uploadPhotosSub: "மொபைல் கேமராவில் படம் எடுங்கள். நெசவின் தரத்தை AI சரிபார்க்கும்.",
        cameraClickTitle: "கேமராவை திறக்க அல்லது படம் தேர்வு செய்ய அழுத்தவும்",
        cameraClickSub: "பட்டு நெசவு மற்றும் மண்பாண்ட பளபளப்பு தெளிவாகத் தெரியும்",
        chooseSamplePhoto: "மாதிரி படம் பயன்படுத்த",
        photosGalleryTitle: "தேர்ந்தெடுக்கப்பட்ட படங்கள்:",
        mainCover: "முக்கிய படம்",
        detailAngle: "நுணுக்கப் பார்வை",
        addMorePhoto: "படம் சேர்",
        aiVisionHeader: "AI பார்வை நம்பகத்தன்மை பகுப்பாய்வு:",
        recordStoryTitle: "உங்கள் கைவினை கதையை பதிவு செய்க (ஆடியோ)",
        recordStorySub: "வாங்குவோர் உங்கள் பாரம்பரியம் மற்றும் நெசவு கதையை உங்கள் குரலிலேயே கேட்க விரும்புகிறார்கள்!",
        recordVoiceStory: "30 வினாடி கதை பதிவு",
        previewAudioStory: "முன்னோட்டம் கேட்க",
        nextPricing: "அடுத்து: நியாய விலை உறுதி",
        aiFairWageIndex: "AI நியாய ஊதிய கணக்கீடு",
        pricingHeaderTitle: "வெளிப்படையான நியாய விலை பரிந்துரை",
        pricingHeaderSub: "உங்களுக்கு குறைந்த விலை கிடைக்காமல் நாங்கள் பாதுகாக்கிறோம். உங்கள் உழைப்பிற்கு முழு ஊதியம்.",
        materialCostSlider: "மூலப்பொருள் செலவு:",
        laborHoursSlider: "நெசவு / கைவினை மணிநேரம்:",
        craftIntricacySlider: "வேலைப்பாட்டின் நுணுக்கம்:",
        giCertifiedPremium: "புவிசார் குறியீடு (GI) சான்றிதழ்",
        giCertifiedPremiumSub: "பாரம்பரிய பூர்வீக தயாரிப்பிற்கு +25% கூடுதல் மதிப்பு",
        aiFairSuggestedPrice: "AI பரிந்துரைக்கும் நியாயமான சந்தை விலை",
        rawMaterials: "மூலப்பொருட்கள்",
        artisanLabor: "கைவினைஞர் நியாய ஊதியம் (₹250/மணி)",
        giSkillPremium: "GI பாரம்பரியம் & நுணுக்க ஊக்கத்தொகை",
        yourNetProfit: "உங்கள் நேரடி வருமானம்",
        finalSellingPriceLabel: "உங்கள் இறுதி விற்பனை விலை (₹):",
        priceAdvice: "✨ கிராஃப்ட்கனெக்ட் 0% தரகு உத்தரவாதத்தால் பாதுகாக்கப்பட்டது",
        publishListingBtn: "🎉 குரல் மூலம் சந்தையில் வெளியிடுங்கள்",
        directFromMakers: "100% கிராமப்புற இந்திய கைவினைஞர்களிடமிருந்து",
        marketTitle: "உண்மையான இந்திய கைவினைப் பொருட்களை கண்டறியுங்கள்",
        marketSub: "ஒவ்வொரு பொருளிலும் தயாரிப்பாளரின் குரல் கதை, புவிசார் குறியீடு மற்றும் நியாய ஊதிய சான்றிதழ் உள்ளது.",
        voiceSearch: "குரல் தேடல்",
        catAll: "அனைத்தும்",
        catSarees: "கைத்தறி பட்டுப் புடவைகள்",
        catPottery: "சுடுமண் பாண்டங்கள்",
        catWood: "மரச் செதுக்கல்கள்",
        catEmbroidery: "ஜர்தோசி வேலைப்பாடு",
        catMetal: "பித்தளை & டோக்ரா கலை",
        ordersPageTitle: "📦 ஆர்டர்கள் & பார்சல் அனுப்பும் பிரிவு",
        ordersPageSub: "வாடிக்கையாளர் ஆர்டர்களை நிர்வகியுங்கள். பார்சல் தயாரானதை குரல் மூலம் புதுப்பிக்கலாம்.",
        voiceUpdateOrder: "🎤 பேசி நிலையை மாற்றுக",
        allOrdersTab: "அனைத்து ஆர்டர்கள்",
        pendingCraftingTab: "நெசவில் / தயாராகிறது",
        packedTab: "பார்சல் தயார்",
        dispatchedTab: "வழியில் உள்ளது",
        smartWageTool: "ஸ்மார்ட் நியாய கூலி கால்குலேட்டர்",
        toolTitle: "கைவினைஞர் உழைப்பு மற்றும் கூலி மதிப்பீட்டாளர்",
        toolSub: "இடைத்தரகர்களின் குறைந்த விலையிலிருந்து தப்புங்கள். விற்பனைக்கு முன் உண்மையான மதிப்பை அறியுங்கள்.",
        enterCraftParams: "கைவினை விவரங்களை உள்ளிடுக",
        selectCraftType: "கைவினை வகை:",
        rawMaterialCostLabel: "மூலப்பொருள் செலவு (பட்டு, நூல், களிமண், மரம்):",
        artisanHoursLabel: "மொத்த உழைப்பு மணிநேரம்:",
        masteryLevelLabel: "கைவினைஞர் அனுபவம் / பாரம்பரியம்:",
        speakPriceAdviceBtn: "🔊 என் மொழியில் விலை ஆலோசனையைக் கேள்",
        fairPriceGuarantee: "சான்றளிக்கப்பட்ட நியாய மதிப்பு",
        minimumSafeSellPrice: "குறைந்தபட்ச பாதுகாப்பான விலை:",
        guaranteedWage: "உறுதிசெய்யப்பட்ட மணிநேர ஊதியம்:",
        traderOfferComparison: "வழக்கமான இடைத்தரகர் கொடுக்கும் விலை:",
        aiNegotiationTip: "AI விலை ஆலோசனை:",
        negotiationAdviceDefault: '"இந்த தயாரிப்பை ₹7,800 க்கும் குறைவாக ஒருபோதும் விற்காதீர்கள். தூய பட்டு மற்றும் 36 மணிநேர கைத்தறி உழைப்பிற்கு இந்த விலை முற்றிலும் நியாயமானது."',
        profileHeritage: "4-ஆம் தலைமுறை முதன்மை நெசவாளர் • காஞ்சிபுரம் நெசவாளர் சங்கம்",
        yearsExperience: "ஆண்டு அனுபவம்",
        craftsSold: "விற்பனையான பொருட்கள்",
        buyerRating: "வாடிக்கையாளர் மதிப்பீடு",
        fairWageVerified: "நியாய கூலி சரிபார்க்கப்பட்டது",
        addListingProfile: "பொருள் சேர்",
        bankUpiSettings: "வங்கி / UPI",
        artisanAudioStoryHeader: "என் கைவினை கதை மற்றும் பாரம்பரியம் (ஆடியோ)",
        artisanAudioStorySub: "தமிழில் பதிவு செய்யப்பட்டது, இந்தி மற்றும் ஆங்கில மொழிபெயர்ப்புகளுடன்",
        reRecordStory: "மீண்டும் பதிவு செய்க",
        storyTrackTitle: '"முன்னோர்களின் தறி: பட்டு நெசவின் 4 தலைமுறைகள்"',
        voiceStoryTranscript: "கைவினைஞரின் குரல் வரிகள்",
        profileStoryTranscriptText: '"நான் 12 வயதில் என் தாயுடன் நெசவு செய்யத் தொடங்கினேன். ஒவ்வொரு தூய பட்டுப் புடவையும் எங்கள் பாரம்பரிய தறியில் நெய்ய 14 நாட்கள் ஆகும். நீங்கள் எங்கள் புடவையை வாங்கும் போது, எங்கள் 150 ஆண்டுகால குடும்ப நெசவு பாரம்பரியத்தை வாழ வைக்கிறீர்கள்."',
        myGalleryTitle: "கைவினை கலைக்கூட படைப்புகள்",
        myGallerySub: "அனைத்து பொருட்களும் நேரடி வாங்குதலுக்கு தயாராக உள்ளன",
        vaaniBadge: "குரல் AI",
        vaaniListening: "கேட்கிறது... இப்போது பேசுங்கள்",
        trySaying: "இதைச் சொல்லுங்கள் அல்லது தொடுங்கள்:",
        cmdSellSaree: '"காஞ்சிபுரம் பட்டுப் புடவை விற்க"',
        cmdCheckOrders: '"என் ஆர்டர்களைக் காட்டு"',
        cmdCheckEarnings: '"என் வருமானம் எவ்வளவு?"',
        cmdHowToUse: '"கிராஃப்ட்கனெக்ட் எப்படி வேலை செய்கிறது?"',
        pauseMic: "மைக்கை நிறுத்து",
        executeCommand: "செயல்படுத்து",
        newOrderAlertTitle: "🎉 புதிய குரல் ஆர்டர் வந்துள்ளது!",
        accept: "ஏற்றுக்கொள்",
        bankModalTitle: "கைவினைஞர் நேரடி வங்கி & UPI கணக்கு",
        bankModalSub: "வாங்குபவர்களிடமிருந்து வரும் தொகை இடைத்தரகர் கமிஷன் இல்லாமல் உடனே உங்கள் கணக்கில் வரவு வைக்கப்படும்.",
        artisanUpiLabel: "UPI முகவரி (Google Pay / PhonePe):",
        bankAccountLabel: "வங்கி கணக்கு எண்:",
        bankIfscLabel: "IFSC குறியீடு:",
        saveAccount: "கணக்கைச் சேமித்து சரிபார்க்க",
        dailyVoiceDigest: "வணக்கம் தேவி அம்மாள். இன்று உங்களுக்கு 3 பட்டுப் புடவை ஆர்டர்கள் வந்துள்ளன. இந்த மாத வருமானம் 38,450 ரூபாயாக உள்ளது. மும்பை மற்றும் பெங்களூரில் காஞ்சிபுரம் பட்டுக்கான தேவை 30 சதவீதம் உயர்ந்துள்ளது."
    }
};

// ==========================================================================
// 2. MOCK DATABASE & DEMO STATE
// ==========================================================================
let currentLang = 'en';
let currentRole = 'artisan'; // 'artisan' | 'buyer'
let activeView = 'dashboard';
let isAudioSpeaking = false;
let isListingRecording = false;
let isAssistantListening = false;
let listingCurrentStep = 1;
let speechRecognizer = null;
let currentCategoryFilter = 'all';

// Initial Craft Database (Rich Indian Crafts)
let CRAFT_DATABASE = [
    {
        id: 'craft-101',
        title: "Pure Zari Kanchipuram Handloom Silk Saree",
        title_hi: "शुद्ध ज़री कांचीपुरम हथकरघा सिल्क साड़ी",
        title_ta: "தூய ஜரிகை காஞ்சிபுரம் கைத்தறி பட்டுப் புடவை",
        category: "saree",
        categoryName: "Handloom Sarees",
        price: 7450,
        traderPrice: 2400,
        hours: 48,
        materialCost: 2800,
        origin: "Kanchipuram, Tamil Nadu",
        artisanName: "Devi Ammal",
        artisanRole: "Master Weaver (GI Certified)",
        artisanImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
        detailImg: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80",
        giTag: "GI Tag #16 - Kanchipuram Silk",
        voiceStoryText: "Woven on a 3-shuttle pit loom using pure mulberry silk and silver dipped gold zari with traditional peacock annapakshi borders.",
        voiceStoryAudioLang: "ta",
        rating: 4.9,
        soldCount: 42,
        isArtisanOwner: true
    },
    {
        id: 'craft-102',
        title: "Hand-thrown Terracotta Clay Water Jug (Kooja)",
        title_hi: "हाथ से बना टेराकोटा मिट्टी का सुराही/जग",
        title_ta: "கைகளால் சுடப்பட்ட சுடுமண் கூஜா (குளிர் நீர் பாண்டம்)",
        category: "pottery",
        categoryName: "Terracotta Pottery",
        price: 1250,
        traderPrice: 350,
        hours: 8,
        materialCost: 200,
        origin: "Manamadurai, Tamil Nadu",
        artisanName: "Ramasamy Velar",
        artisanRole: "Heritage Potter",
        artisanImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&auto=format&fit=crop&q=80",
        detailImg: "https://images.unsplash.com/photo-1615865417491-9941019fbc00?w=600&auto=format&fit=crop&q=80",
        giTag: "GI Tag #428 - Manamadurai Pottery",
        voiceStoryText: "Crafted using special Vaigai riverbed clay enriched with mica flakes for natural 5-degree temperature cooling without refrigeration.",
        voiceStoryAudioLang: "ta",
        rating: 4.8,
        soldCount: 88,
        isArtisanOwner: false
    },
    {
        id: 'craft-103',
        title: "Hand-Carved Teakwood Keepsake Jewelry Box",
        title_hi: "हाथ से तराशा गया सागवान का आभूषण डिब्बा",
        title_ta: "கைவேலைப்பாடு கொண்ட தேக்கு மர நகைப் பெட்டி",
        category: "wood",
        categoryName: "Hand-Carved Wood",
        price: 3400,
        traderPrice: 1100,
        hours: 22,
        materialCost: 1100,
        origin: "Saharanpur, Uttar Pradesh",
        artisanName: "Mohd. Aslam",
        artisanRole: "Master Wood Artisan",
        artisanImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80",
        detailImg: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&auto=format&fit=crop&q=80",
        giTag: "GI Tag #182 - Saharanpur Woodcraft",
        voiceStoryText: "Carved with intricate floral jaali lattices using century-old brass chisels and polished with pure natural beeswax.",
        voiceStoryAudioLang: "hi",
        rating: 5.0,
        soldCount: 31,
        isArtisanOwner: false
    },
    {
        id: 'craft-104',
        title: "Handmade Zardozi Embroidery Pashmina Shawl",
        title_hi: "हाथ से बनी जरदोजी कढ़ाई वाली पश्मीना शॉल",
        title_ta: "கைவினை ஜர்தோசி வேலைப்பாடு பஷ்மினா சால்வை",
        category: "embroidery",
        categoryName: "Zardozi & Embroidery",
        price: 8900,
        traderPrice: 2800,
        hours: 64,
        materialCost: 3200,
        origin: "Lucknow, Uttar Pradesh",
        artisanName: "Shabana Begum",
        artisanRole: "Zardozi Craftsperson",
        artisanImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&auto=format&fit=crop&q=80",
        detailImg: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
        giTag: "GI Tag #119 - Lucknow Zardozi",
        voiceStoryText: "Embroidered with gold-plated metallic wire (dabka) and pearls on authentic handwoven wool.",
        voiceStoryAudioLang: "hi",
        rating: 4.9,
        soldCount: 19,
        isArtisanOwner: false
    },
    {
        id: 'craft-105',
        title: "Bastar Tribal Lost-Wax Dhokra Brass Figurine",
        title_hi: "बस्तर आदिवासी ढोकरा पीतल शिल्प मूर्ति",
        title_ta: "பஸ்தார் பழங்குடியினர் டோக்ரா பித்தளை சிற்பம்",
        category: "metal",
        categoryName: "Brass & Dhokra Art",
        price: 4200,
        traderPrice: 1300,
        hours: 28,
        materialCost: 1400,
        origin: "Bastar, Chhattisgarh",
        artisanName: "Ghanshyam Jhankar",
        artisanRole: "Tribal Bell-Metal Sculptor",
        artisanImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
        image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=600&auto=format&fit=crop&q=80",
        detailImg: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",
        giTag: "GI Tag #83 - Bastar Dhokra",
        voiceStoryText: "4000-year-old lost-wax casting technique using river clay, beeswax molds, and recycled scrap brass.",
        voiceStoryAudioLang: "hi",
        rating: 4.8,
        soldCount: 54,
        isArtisanOwner: false
    }
];

// Initial Orders Database
let ORDERS_DATABASE = [
    {
        orderId: "CC-ORD-8821",
        title: "Pure Zari Kanchipuram Handloom Silk Saree",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&auto=format&fit=crop&q=80",
        buyer: "Priya Sharma",
        city: "Mumbai, MH",
        amount: 7450,
        date: "Today, 11:20 AM",
        status: "crafting", // 'crafting' | 'packed' | 'dispatched'
        statusLabel: "In Crafting / Loom",
        buyerVoiceNote: "Please pack with extra protection for wedding gift. Loved your craft story!",
        paymentMethod: "UPI Pre-paid (Direct to Devi Ammal)"
    },
    {
        orderId: "CC-ORD-8819",
        title: "Temple Border Silk Dupatta",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=200&auto=format&fit=crop&q=80",
        buyer: "Anand Venkatesh",
        city: "Bangalore, KA",
        amount: 3200,
        date: "Yesterday",
        status: "packed",
        statusLabel: "Ready for Pickup",
        buyerVoiceNote: "Please attach weaver authenticity card.",
        paymentMethod: "UPI Pre-paid"
    },
    {
        orderId: "CC-ORD-8794",
        title: "Mulberry Silk Brocade Fabric (5m)",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=200&auto=format&fit=crop&q=80",
        buyer: "Meera Sen",
        city: "Kolkata, WB",
        amount: 5600,
        date: "2 days ago",
        status: "dispatched",
        statusLabel: "In Transit",
        buyerVoiceNote: "Delivering via India Post Speed Post.",
        paymentMethod: "Cash on Delivery Verified"
    }
];

// ==========================================================================
// 3. SYNTHETIC SOUND FX ENGINE (Web Audio API)
// ==========================================================================
const SoundFX = {
    ctx: null,
    getAudioContext() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        return this.ctx;
    },

    playChime() {
        try {
            const ctx = this.getAudioContext();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
            osc.frequency.exponentialRampToValueAtTime(880.00, ctx.currentTime + 0.15); // A5
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.5);
        } catch (e) { console.warn("Audio chime error", e); }
    },

    playMicStart() {
        try {
            const ctx = this.getAudioContext();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.25, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.25);
        } catch (e) { }
    },

    playSuccess() {
        try {
            const ctx = this.getAudioContext();
            if (!ctx) return;
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, ctx.currentTime + (idx * 0.08));
                gain.gain.setValueAtTime(0.18, ctx.currentTime + (idx * 0.08));
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (idx * 0.08) + 0.4);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + (idx * 0.08));
                osc.stop(ctx.currentTime + (idx * 0.08) + 0.45);
            });
        } catch (e) { }
    }
};

// ==========================================================================
// 4. SPEECH SYNTHESIS & RECOGNITION (Voice-First Engine)
// ==========================================================================

/**
 * Text-to-Speech synthesizer with language selection
 */
function speakText(text, langCode = currentLang, callback = null) {
    if (!('speechSynthesis' in window)) {
        console.warn("Speech synthesis not supported in this browser.");
        if (callback) callback();
        return;
    }

    window.speechSynthesis.cancel(); // cancel any ongoing speech

    const indicator = document.getElementById('sound-indicator');
    const indicatorText = document.getElementById('sound-indicator-text');
    if (indicator) {
        indicator.classList.remove('hidden');
        if (indicatorText) indicatorText.textContent = text.slice(0, 45) + "...";
    }

    const utterance = new SpeechSynthesisUtterance(text);

    // Set accurate voice language tag
    if (langCode === 'ta') utterance.lang = 'ta-IN';
    else if (langCode === 'hi') utterance.lang = 'hi-IN';
    else utterance.lang = 'en-IN';

    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    utterance.onend = () => {
        if (indicator) indicator.classList.add('hidden');
        isAudioSpeaking = false;
        if (callback) callback();
    };

    utterance.onerror = () => {
        if (indicator) indicator.classList.add('hidden');
        isAudioSpeaking = false;
        if (callback) callback();
    };

    isAudioSpeaking = true;
    SoundFX.playChime();
    window.speechSynthesis.speak(utterance);
}

/**
 * Stop any current speech
 */
function stopSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    const indicator = document.getElementById('sound-indicator');
    if (indicator) indicator.classList.add('hidden');
    isAudioSpeaking = false;
}

/**
 * Initialize Web Speech API Speech Recognition
 */
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        speechRecognizer = new SpeechRecognition();
        speechRecognizer.continuous = false;
        speechRecognizer.interimResults = true;
    }
}

// ==========================================================================
// 5. LOCALIZATION & LANGUAGE SWITCHING
// ==========================================================================

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    document.body.setAttribute('data-lang', lang);

    // Update current language label in header
    const langLabelMap = { en: 'English', hi: 'हिन्दी', ta: 'தமிழ்' };
    const labelEl = document.getElementById('current-lang-label');
    if (labelEl) labelEl.textContent = langLabelMap[lang];

    // Update active class on dropdown items
    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.getAttribute('data-lang-code') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Re-translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang][key]) {
            el.textContent = TRANSLATIONS[lang][key];
        }
    });

    // Update greeting in dashboard
    updateDashboardGreeting();

    // Close dropdown menu
    const menu = document.getElementById('lang-dropdown');
    if (menu) menu.classList.remove('show');

    // Re-render dynamic components
    renderDashboardOrders();
    renderMyCraftItems();
    renderMarketplaceItems();
    renderOrdersPage();
    updateFairPriceCalculation();
    recalculateStandalonePrice();

    // Audio confirmation in selected language
    const confirmations = {
        en: "Language changed to English.",
        hi: "भाषा बदलकर हिन्दी कर दी गई है।",
        ta: "மொழி தமிழுக்கு மாற்றப்பட்டது."
    };
    speakText(confirmations[lang]);
}

function toggleLangMenu() {
    const menu = document.getElementById('lang-dropdown');
    if (menu) menu.classList.toggle('show');
}

// Close dropdown on outside click
document.addEventListener('click', (e) => {
    const wrapper = document.querySelector('.language-dropdown-wrapper');
    const menu = document.getElementById('lang-dropdown');
    if (wrapper && menu && !wrapper.contains(e.target)) {
        menu.classList.remove('show');
    }
});

function getLocalized(key) {
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
        || (TRANSLATIONS['en'] && TRANSLATIONS['en'][key])
        || key;
}

function updateDashboardGreeting() {
    const greetingEl = document.getElementById('dash-greeting');
    if (!greetingEl) return;

    if (currentLang === 'ta') {
        greetingEl.textContent = "வணக்கம், தேவி அம்மாள்!";
    } else if (currentLang === 'hi') {
        greetingEl.textContent = "नमस्ते, देवी अम्मल!";
    } else {
        greetingEl.textContent = "Vanakkam, Devi Ammal!";
    }
}

// ==========================================================================
// 6. NAVIGATION & VIEW SWITCHING
// ==========================================================================

function switchView(viewName) {
    activeView = viewName;

    // Update nav links active state
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-view') === viewName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Show correct view section
    document.querySelectorAll('.app-view').forEach(view => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // View specific init hooks
    if (viewName === 'marketplace') {
        renderMarketplaceItems();
    } else if (viewName === 'orders') {
        renderOrdersPage();
    } else if (viewName === 'profile') {
        renderProfileGallery();
    }
}

function setUserRole(role) {
    currentRole = role;
    document.body.setAttribute('data-role', role);

    const btnArtisan = document.getElementById('btn-role-artisan');
    const btnBuyer = document.getElementById('btn-role-buyer');

    if (role === 'artisan') {
        if (btnArtisan) btnArtisan.classList.add('active');
        if (btnBuyer) btnBuyer.classList.remove('active');
        switchView('dashboard');
        speakText(currentLang === 'ta' ? "கைவினைஞர் கூடம் திறக்கப்பட்டது" : (currentLang === 'hi' ? "कारीगर स्टूडियो खुला है" : "Artisan Studio Mode Activated"));
    } else {
        if (btnBuyer) btnBuyer.classList.add('active');
        if (btnArtisan) btnArtisan.classList.remove('active');
        switchView('marketplace');
        speakText(currentLang === 'ta' ? "வாங்குவோர் சந்தை திறக்கப்பட்டது" : (currentLang === 'hi' ? "खरीदार बाज़ार खुला है" : "Buyer Marketplace Mode Activated"));
    }
}

function playCurrentViewAudioHelp() {
    let helpMessage = "";
    if (activeView === 'dashboard') {
        helpMessage = getLocalized('dashSubtitle');
    } else if (activeView === 'voice-list') {
        helpMessage = getLocalized('voiceGuideStep1');
    } else if (activeView === 'marketplace') {
        helpMessage = getLocalized('marketSub');
    } else if (activeView === 'orders') {
        helpMessage = getLocalized('ordersPageSub');
    } else if (activeView === 'price-ai') {
        helpMessage = getLocalized('toolSub');
    } else if (activeView === 'profile') {
        helpMessage = getLocalized('artisanAudioStorySub');
    }
    speakText(helpMessage);
}

// ==========================================================================
// 7. VOICE-BASED PRODUCT LISTING WIZARD
// ==========================================================================

function setListingStep(step) {
    listingCurrentStep = step;

    // Update nodes
    for (let i = 1; i <= 3; i++) {
        const node = document.getElementById(`step-node-${i}`);
        const content = document.getElementById(`listing-step-${i}`);
        if (node) {
            if (i <= step) node.classList.add('active');
            else node.classList.remove('active');
        }
        if (content) {
            if (i === step) content.classList.add('active');
            else content.classList.remove('active');
        }
    }

    // Audio cue on step change
    if (step === 1) speakText(getLocalized('voiceGuideStep1'));
    else if (step === 2) speakText(getLocalized('uploadPhotosSub'));
    else if (step === 3) {
        updateFairPriceCalculation();
        speakText(getLocalized('pricingHeaderSub'));
    }
}

function proceedToListingStep(step) {
    setListingStep(step);
}

function toggleVoiceListingMic() {
    const micBtn = document.getElementById('listing-mic-trigger');
    const bars = document.getElementById('listing-audio-bars');
    const statusBadge = document.getElementById('transcription-status-badge');
    const micStatusText = document.getElementById('listing-mic-status');
    const transcriptOutput = document.getElementById('listing-transcript-text');

    if (!isListingRecording) {
        // Start Recording
        isListingRecording = true;
        SoundFX.playMicStart();
        if (micBtn) micBtn.classList.add('recording');
        if (bars) bars.classList.add('active');
        if (statusBadge) statusBadge.innerHTML = `<i class="fa-solid fa-microphone-lines text-danger"></i> <span>Listening (${currentLang.toUpperCase()})...</span>`;
        if (micStatusText) micStatusText.textContent = "Listening... Speak now";

        // Try Native Web Speech API
        if (speechRecognizer) {
            try {
                speechRecognizer.lang = currentLang === 'ta' ? 'ta-IN' : (currentLang === 'hi' ? 'hi-IN' : 'en-IN');
                speechRecognizer.start();

                speechRecognizer.onresult = (event) => {
                    let text = "";
                    for (let i = 0; i < event.results.length; i++) {
                        text += event.results[i][0].transcript;
                    }
                    if (transcriptOutput) transcriptOutput.textContent = text;
                    parseVoiceParameters(text);
                };

                speechRecognizer.onerror = (err) => {
                    console.warn("Speech rec error, falling back to simulated realistic transcription", err);
                    simulateRealisticSpeechInput();
                };

                speechRecognizer.onend = () => {
                    stopVoiceListingMic();
                };
            } catch (err) {
                simulateRealisticSpeechInput();
            }
        } else {
            simulateRealisticSpeechInput();
        }
    } else {
        stopVoiceListingMic();
    }
}

function stopVoiceListingMic() {
    isListingRecording = false;
    const micBtn = document.getElementById('listing-mic-trigger');
    const bars = document.getElementById('listing-audio-bars');
    const statusBadge = document.getElementById('transcription-status-badge');
    const micStatusText = document.getElementById('listing-mic-status');

    if (micBtn) micBtn.classList.remove('recording');
    if (bars) bars.classList.remove('active');
    if (statusBadge) statusBadge.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> <span>Transcription Ready</span>`;
    if (micStatusText) micStatusText.textContent = getLocalized('tapToSpeak');

    if (speechRecognizer) {
        try { speechRecognizer.stop(); } catch (e) { }
    }
}

function clearListingTranscript() {
    const transcriptOutput = document.getElementById('listing-transcript-text');
    if (transcriptOutput) transcriptOutput.textContent = "";
}

/**
 * Simulated realistic speech transcription with typewriter effect for demo robustness
 */
function simulateRealisticSpeechInput() {
    const transcriptOutput = document.getElementById('listing-transcript-text');

    const sampleSentences = {
        en: "I have woven a pure mulberry silk Kanchipuram saree with gold zari peacock borders. It took 48 hours of handloom work and 2800 rupees for raw silk yarn.",
        hi: "मैंने शुद्ध शहतूत रेशम की कांचीपुरम साड़ी हाथ से बुनी है जिसमें सुनहरी ज़री का मोर वाला बॉर्डर है। इसे बनाने में 48 घंटे लगे और 2800 रुपये का कच्चा रेशम लगा।",
        ta: "நான் தூய மல்பெரி பட்டு மற்றும் தங்க ஜரிகை கொண்ட காஞ்சிபுரம் பட்டுப் புடவையை நெய்துள்ளேன். இதற்கு 48 மணிநேர கைத்தறி உழைப்பும், 2800 ரூபாய் பட்டு நூல் செலவும் ஆனது."
    };

    const textToType = sampleSentences[currentLang] || sampleSentences.en;
    if (transcriptOutput) transcriptOutput.textContent = "";

    let idx = 0;
    const interval = setInterval(() => {
        if (idx < textToType.length && isListingRecording) {
            if (transcriptOutput) transcriptOutput.textContent += textToType[idx];
            idx++;
        } else {
            clearInterval(interval);
            stopVoiceListingMic();
            parseVoiceParameters(textToType);
        }
    }, 35);
}

/**
 * Intelligent parameter parser from voice text
 */
function parseVoiceParameters(text) {
    const titleInput = document.getElementById('extract-title');
    const categorySelect = document.getElementById('extract-category');
    const hoursInput = document.getElementById('extract-hours');
    const costInput = document.getElementById('extract-mat-cost');

    const lower = text.toLowerCase();

    // Category & Title detection
    if (lower.includes('saree') || lower.includes('silk') || lower.includes('साड़ी') || lower.includes('புடவை') || lower.includes('பட்டு')) {
        if (titleInput) titleInput.value = currentLang === 'ta' ? "தூய காஞ்சிபுரம் கைத்தறி பட்டுப் புடவை" : (currentLang === 'hi' ? "कांचीपुरम शुद्ध हथकरघा सिल्क साड़ी" : "Kanchipuram Pure Silk Handloom Saree");
        if (categorySelect) categorySelect.value = "Handloom & Textiles";
        if (hoursInput) hoursInput.value = 48;
        if (costInput) costInput.value = 2800;
    } else if (lower.includes('pottery') || lower.includes('clay') || lower.includes('jug') || lower.includes('मिट्टी') || lower.includes('மண்')) {
        if (titleInput) titleInput.value = currentLang === 'ta' ? "சுடுமண் குளிர் நீர் கூஜா" : (currentLang === 'hi' ? "टेराकोटा मिट्टी का सुराही" : "Terracotta Natural Water Jug");
        if (categorySelect) categorySelect.value = "Terracotta & Pottery";
        if (hoursInput) hoursInput.value = 8;
        if (costInput) costInput.value = 250;
    } else if (lower.includes('wood') || lower.includes('teak') || lower.includes('लकड़ी') || lower.includes('மரம்')) {
        if (titleInput) titleInput.value = currentLang === 'ta' ? "செதுக்கப்பட்ட தேக்கு மரப் பெட்டி" : (currentLang === 'hi' ? "नक्काशीदार सागवान की डिब्बी" : "Hand-Carved Teakwood Box");
        if (categorySelect) categorySelect.value = "Woodcraft & Carvings";
        if (hoursInput) hoursInput.value = 24;
        if (costInput) costInput.value = 1100;
    }

    // Update slider values for step 3
    const sliderMat = document.getElementById('slider-mat-cost');
    const sliderHours = document.getElementById('slider-labor-hours');
    if (sliderMat && costInput) sliderMat.value = costInput.value;
    if (sliderHours && hoursInput) sliderHours.value = hoursInput.value;

    SoundFX.playSuccess();
}

/**
 * One-Tap craft voice presets
 */
function applyPresetVoiceListing(type) {
    SoundFX.playChime();
    const transcriptOutput = document.getElementById('listing-transcript-text');

    if (type === 'saree') {
        const text = currentLang === 'ta' ? "தூய காஞ்சிபுரம் கைத்தறி பட்டுப் புடவை, 48 மணிநேர நெசவு, மூலப்பொருள் செலவு ₹2800." : (currentLang === 'hi' ? "कांचीपुरम शुद्ध सिल्क साड़ी, 48 घंटे की हथकरघा बुनाई, कच्चा माल ₹2800." : "Kanchipuram pure silk saree, 48 hours loom weaving, raw silk cost 2800 rupees.");
        if (transcriptOutput) transcriptOutput.textContent = text;
        parseVoiceParameters(text);
    } else if (type === 'pottery') {
        const text = currentLang === 'ta' ? "சுடுமண் இயற்கை நீர் கூஜா, 8 மணிநேர வேலை, களிமண் செலவு ₹250." : (currentLang === 'hi' ? "टेराकोटा मिट्टी का सुराही, 8 घंटे की कारीगरी, मिट्टी खर्च ₹250." : "Terracotta clay water jug, 8 hours crafting, raw clay cost 250 rupees.");
        if (transcriptOutput) transcriptOutput.textContent = text;
        parseVoiceParameters(text);
    } else if (type === 'wood') {
        const text = currentLang === 'ta' ? "தேக்கு மர செதுக்கல் பெட்டி, 22 மணிநேரம், மரச் செலவு ₹1100." : (currentLang === 'hi' ? "सागवान की नक्काशीदार डिब्बी, 22 घंटे का काम, लकड़ी लागत ₹1100." : "Hand-carved teakwood box, 22 hours work, teakwood cost 1100 rupees.");
        if (transcriptOutput) transcriptOutput.textContent = text;
        parseVoiceParameters(text);
    } else if (type === 'zardozi') {
        const text = currentLang === 'ta' ? "ஜர்தோசி வேலைப்பாடு சால்வை, 64 மணிநேரம், ஜரிகை நூல் செலவு ₹3200." : (currentLang === 'hi' ? "जरदोजी कढ़ाई वाली पश्मीना शॉल, 64 घंटे का काम, जरदोजी धागा खर्च ₹3200." : "Zardozi hand-embroidered shawl, 64 hours crafting, dabka gold wire cost 3200 rupees.");
        if (transcriptOutput) transcriptOutput.textContent = text;
        parseVoiceParameters(text);
    }
}

// Photo & Vision upload
function triggerMockPhotoUpload() {
    SoundFX.playChime();
    const fileInput = document.getElementById('file-photo-input');
    if (fileInput) fileInput.click();
}

function handlePhotoSelected(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const mainImg = document.getElementById('main-preview-img');
        if (mainImg) mainImg.src = e.target.result;
        SoundFX.playSuccess();
        speakText(currentLang === 'ta' ? "புகைப்படம் சேர்க்கப்பட்டது. AI தரத்தை சரிபார்த்தது." : (currentLang === 'hi' ? "फोटो जोड़ी गई। एआई ने प्रामाणिकता सत्यापित की।" : "Photo added. AI verified authentic fabric weave."));
    };
    reader.readAsDataURL(file);
}

// Craft Story Recording
let isRecordingStory = false;
let storyTimerInterval = null;

function toggleStoryRecording() {
    const recLabel = document.getElementById('story-rec-label');
    const timerEl = document.getElementById('story-timer');

    if (!isRecordingStory) {
        isRecordingStory = true;
        SoundFX.playMicStart();
        if (recLabel) recLabel.textContent = "Recording... (Speak your story)";
        let sec = 0;
        if (timerEl) timerEl.textContent = "00:00 / 00:30";

        storyTimerInterval = setInterval(() => {
            sec++;
            const formatted = (sec < 10 ? `00:0${sec}` : `00:${sec}`) + " / 00:30";
            if (timerEl) timerEl.textContent = formatted;
            if (sec >= 30) {
                toggleStoryRecording();
            }
        }, 1000);
    } else {
        isRecordingStory = false;
        clearInterval(storyTimerInterval);
        SoundFX.playSuccess();
        if (recLabel) recLabel.textContent = "Story Recorded (30s) ✓";
        speakText(currentLang === 'ta' ? "உங்கள் கைவினை கதை வெற்றிகரமாக பதிவு செய்யப்பட்டது!" : (currentLang === 'hi' ? "आपकी शिल्प कहानी सफलतापूर्वक रिकॉर्ड हो गई!" : "Your craft voice story was recorded successfully!"));
    }
}

function playCurrentCraftStorySample() {
    const storyText = currentLang === 'ta'
        ? "இந்த காஞ்சிபுரம் பட்டுப் புடவை 3-ஷட்டில் தறியில் நெய்யப்பட்டது. தூய மல்பெரி பட்டு மற்றும் அண்ணபக்ஷி ஜரிகை வேலைப்பாடு கொண்டது."
        : (currentLang === 'hi'
            ? "यह कांचीपुरम साड़ी शुद्ध रेशम और सोने की ज़री से हथकरघे पर 14 दिनों में तैयार की गई है।"
            : "This Kanchipuram silk saree was handwoven over 14 days using pure mulberry silk and gold zari motifs.");
    speakText(storyText);
}

// ==========================================================================
// 8. AI FAIR-PRICE CALCULATION ENGINE
// ==========================================================================

function updateFairPriceCalculation() {
    const matCostSlider = document.getElementById('slider-mat-cost');
    const hoursSlider = document.getElementById('slider-labor-hours');
    const skillSlider = document.getElementById('slider-craft-skill');
    const giCheck = document.getElementById('check-gi-boost');

    if (!matCostSlider || !hoursSlider || !skillSlider) return;

    const matCost = parseInt(matCostSlider.value, 10) || 2800;
    const hours = parseInt(hoursSlider.value, 10) || 48;
    const skillLevel = parseInt(skillSlider.value, 10) || 5;
    const hasGiTag = giCheck ? giCheck.checked : true;

    // Label updates
    const labelMat = document.getElementById('val-mat-cost');
    const labelHours = document.getElementById('val-labor-hours');
    const labelSkill = document.getElementById('val-craft-skill');

    if (labelMat) labelMat.textContent = `₹${matCost.toLocaleString('en-IN')}`;
    if (labelHours) labelHours.textContent = `${hours} hours (${Math.ceil(hours / 8)} days)`;

    const skillNames = {
        1: "Apprentice / Simple (Level 1)",
        2: "Skilled Artisan (Level 2)",
        3: "Experienced Artisan (Level 3)",
        4: "Heritage Craftsman (Level 4)",
        5: "Master Artisan (Level 5)"
    };
    if (labelSkill) labelSkill.textContent = skillNames[skillLevel] || `Level ${skillLevel}`;

    // Fair-Wage Math Formula:
    // Base Labor = hours * ₹250/hr fair living wage
    // Skill multiplier = 1 + (skillLevel - 1) * 0.08
    // GI Heritage Bonus = hasGiTag ? 25% of labor : 0
    const baseHourlyWage = 250;
    const laborCost = Math.round(hours * baseHourlyWage * (1 + (skillLevel - 1) * 0.08));
    const giBonus = hasGiTag ? Math.round(laborCost * 0.25) : 0;
    const totalSuggested = matCost + laborCost + giBonus;

    // UI Math Display updates
    const calcSuggested = document.getElementById('calc-suggested-price');
    const calcRange = document.getElementById('calc-price-range');
    const breakMaterials = document.getElementById('breakdown-materials');
    const breakLabor = document.getElementById('breakdown-labor');
    const breakPremium = document.getElementById('breakdown-premium');
    const breakNet = document.getElementById('breakdown-net');
    const finalPriceInput = document.getElementById('input-final-price');

    if (calcSuggested) calcSuggested.textContent = `₹${totalSuggested.toLocaleString('en-IN')}`;
    if (calcRange) {
        const minRange = Math.round(totalSuggested * 0.92);
        const maxRange = Math.round(totalSuggested * 1.12);
        calcRange.textContent = `Safe Range: ₹${minRange.toLocaleString('en-IN')} - ₹${maxRange.toLocaleString('en-IN')}`;
    }

    if (breakMaterials) breakMaterials.textContent = `₹${matCost.toLocaleString('en-IN')}`;
    if (breakLabor) breakLabor.textContent = `₹${laborCost.toLocaleString('en-IN')}`;
    if (breakPremium) breakPremium.textContent = `₹${giBonus.toLocaleString('en-IN')}`;
    if (breakNet) breakNet.textContent = `₹${totalSuggested.toLocaleString('en-IN')} (100%)`;
    if (finalPriceInput) finalPriceInput.value = totalSuggested;
}

/**
 * Publish the new craft listing
 */
function publishCraftListing() {
    const titleInput = document.getElementById('extract-title');
    const priceInput = document.getElementById('input-final-price');
    const hoursInput = document.getElementById('slider-labor-hours');
    const costInput = document.getElementById('slider-mat-cost');
    const mainImg = document.getElementById('main-preview-img');

    const title = titleInput ? titleInput.value : "Kanchipuram Pure Silk Handloom Saree";
    const price = priceInput ? parseInt(priceInput.value, 10) : 7450;
    const hours = hoursInput ? parseInt(hoursInput.value, 10) : 48;
    const matCost = costInput ? parseInt(costInput.value, 10) : 2800;
    const imgSrc = mainImg ? mainImg.src : "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80";

    const newCraft = {
        id: `craft-${Date.now()}`,
        title: title,
        title_hi: title,
        title_ta: title,
        category: "saree",
        categoryName: "Handloom Sarees",
        price: price,
        traderPrice: Math.round(price * 0.35),
        hours: hours,
        materialCost: matCost,
        origin: "Kanchipuram, Tamil Nadu",
        artisanName: "Devi Ammal",
        artisanRole: "Master Weaver (GI Certified)",
        artisanImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
        image: imgSrc,
        detailImg: imgSrc,
        giTag: "GI Tag Verified Masterpiece",
        voiceStoryText: "Handwoven with devotion using traditional pit loom techniques.",
        voiceStoryAudioLang: currentLang,
        rating: 5.0,
        soldCount: 1,
        isArtisanOwner: true
    };

    CRAFT_DATABASE.unshift(newCraft);

    SoundFX.playSuccess();

    // Re-render
    renderMyCraftItems();
    renderMarketplaceItems();
    renderProfileGallery();

    const successVoice = currentLang === 'ta'
        ? `வாழ்த்துகள்! உங்கள் ${title} ₹${price} விலையில் கிராஃப்ட்கனெக்ட் சந்தையில் வெளியிடப்பட்டது.`
        : (currentLang === 'hi'
            ? `बधाई हो! आपकी ${title} ₹${price} में क्राफ्टकनेक्ट बाज़ार में प्रकाशित कर दी गई है।`
            : `Congratulations! Your ${title} has been listed on CraftConnect Marketplace for ₹${price}.`);

    speakText(successVoice, currentLang, () => {
        switchView('dashboard');
    });
}

// Standalone Fair Price Calculator Tool
function recalculateStandalonePrice() {
    const craftType = document.getElementById('standalone-craft-type');
    const matCostInput = document.getElementById('standalone-mat-cost');
    const hoursInput = document.getElementById('standalone-hours');
    const expSelect = document.getElementById('standalone-experience');

    if (!matCostInput || !hoursInput) return;

    const matCost = parseInt(matCostInput.value, 10) || 3200;
    const hours = parseInt(hoursInput.value, 10) || 36;
    const exp = expSelect ? expSelect.value : 'master';

    let hourlyRate = 250;
    let expMultiplier = 1.3;
    if (exp === 'skilled') { hourlyRate = 200; expMultiplier = 1.15; }
    else if (exp === 'apprentice') { hourlyRate = 160; expMultiplier = 1.0; }

    const fairTotal = Math.round(matCost + (hours * hourlyRate * expMultiplier));
    const minSafe = Math.round(fairTotal * 0.90);
    const usualTrader = Math.round(fairTotal * 0.35);

    const resPrice = document.getElementById('standalone-result-price');
    const resMin = document.getElementById('standalone-min-price');
    const resWage = document.getElementById('standalone-wage');
    const resTrader = document.getElementById('standalone-trader-price');
    const resAdvice = document.getElementById('standalone-advice-text');

    if (resPrice) resPrice.textContent = `₹${fairTotal.toLocaleString('en-IN')}`;
    if (resMin) resMin.textContent = `₹${minSafe.toLocaleString('en-IN')}`;
    if (resWage) resWage.textContent = `₹${hourlyRate} / hr`;
    if (resTrader) resTrader.textContent = `₹${usualTrader.toLocaleString('en-IN')} (65% Underpaid!)`;

    if (resAdvice) {
        if (currentLang === 'ta') {
            resAdvice.textContent = `"இந்த கைவினைப் பொருளை ₹${minSafe.toLocaleString('en-IN')} க்கும் குறைவாக ஒருபோதும் விற்காதீர்கள். ${hours} மணிநேர உழைப்புக்கு இந்த விலை முற்றிலும் நியாயமானது."`;
        } else if (currentLang === 'hi') {
            resAdvice.textContent = `"इस शिल्प को ₹${minSafe.toLocaleString('en-IN')} से कम में कभी न बेचें। आपकी ${hours} घंटे की मेहनत इस उचित मूल्य की हकदार है।"`;
        } else {
            resAdvice.textContent = `"Never sell this craft below ₹${minSafe.toLocaleString('en-IN')}. The pure raw materials and ${hours} hours of artisan crafting justify a fair premium market price."`;
        }
    }
}

function speakStandalonePriceAdvice() {
    const resAdvice = document.getElementById('standalone-advice-text');
    if (resAdvice) speakText(resAdvice.textContent);
}

// ==========================================================================
// 9. DYNAMIC RENDERING: DASHBOARD, MARKETPLACE, ORDERS, PROFILE
// ==========================================================================

function renderDashboardOrders() {
    const container = document.getElementById('dash-orders-list');
    if (!container) return;

    container.innerHTML = ORDERS_DATABASE.slice(0, 3).map(order => `
    <div class="order-mini-card">
      <div class="order-mini-info">
        <img src="${order.image}" alt="${order.title}" class="order-thumb-img">
        <div class="order-meta-text">
          <h4>${order.title}</h4>
          <div class="order-buyer"><i class="fa-solid fa-user"></i> ${order.buyer}, ${order.city}</div>
          <div class="order-price">₹${order.amount.toLocaleString('en-IN')}</div>
        </div>
      </div>
      <div class="order-mini-actions">
        <button class="btn-audio-speak" onclick="speakText('${order.buyer} from ${order.city} ordered ${order.title}. Value: ${order.amount} rupees.')" title="Listen to order details">
          <i class="fa-solid fa-volume-high"></i>
        </button>
        <button class="btn btn-sm btn-outline-sm" onclick="switchView('orders')">
          <i class="fa-solid fa-truck"></i> <span>Ship</span>
        </button>
      </div>
    </div>
  `).join('');
}

function renderMyCraftItems() {
    const container = document.getElementById('dash-my-items-grid');
    if (!container) return;

    const myItems = CRAFT_DATABASE.filter(c => c.isArtisanOwner);
    container.innerHTML = myItems.map(craft => createCraftCardHTML(craft)).join('');
}

function renderMarketplaceItems() {
    const container = document.getElementById('marketplace-items-grid');
    if (!container) return;

    let items = CRAFT_DATABASE;
    if (currentCategoryFilter !== 'all') {
        items = items.filter(c => c.category === currentCategoryFilter);
    }

    const searchInput = document.getElementById('market-search-input');
    if (searchInput && searchInput.value.trim() !== '') {
        const q = searchInput.value.toLowerCase().trim();
        items = items.filter(c =>
            c.title.toLowerCase().includes(q) ||
            c.origin.toLowerCase().includes(q) ||
            c.categoryName.toLowerCase().includes(q)
        );
    }

    container.innerHTML = items.map(craft => createCraftCardHTML(craft, true)).join('');
}

function createCraftCardHTML(craft, showBuyBtn = false) {
    const title = currentLang === 'ta' && craft.title_ta ? craft.title_ta : (currentLang === 'hi' && craft.title_hi ? craft.title_hi : craft.title);
    return `
    <div class="craft-card" onclick="openProductDetailModal('${craft.id}')">
      <div class="craft-img-wrapper">
        <img src="${craft.image}" alt="${title}">
        <span class="craft-badge-top"><i class="fa-solid fa-certificate text-gold"></i> ${craft.giTag.split(' - ')[0]}</span>
        <button class="craft-play-story-btn" onclick="event.stopPropagation(); playCraftStoryAudio('${craft.id}')" title="Listen to Maker Voice Story">
          <i class="fa-solid fa-waveform-lines"></i> <span>Story</span>
        </button>
      </div>
      <div class="craft-card-body">
        <div class="craft-origin-tag"><i class="fa-solid fa-location-dot"></i> ${craft.origin}</div>
        <h3 class="craft-title">${title}</h3>
        <div class="craft-meta-chips">
          <span class="meta-chip"><i class="fa-solid fa-clock"></i> ${craft.hours}h work</span>
          <span class="meta-chip"><i class="fa-solid fa-shield-check text-emerald"></i> Fair-Wage</span>
        </div>
        <div class="craft-footer-row">
          <div class="craft-price-wrap">
            <span class="craft-price-label">${getLocalized('fairPriceGuarantee')}</span>
            <span class="craft-price-val">₹${craft.price.toLocaleString('en-IN')}</span>
          </div>
          ${showBuyBtn ? `
            <button class="btn btn-sm btn-primary" onclick="event.stopPropagation(); openProductDetailModal('${craft.id}')">
              <i class="fa-solid fa-bag-shopping"></i> <span>View</span>
            </button>
          ` : `
            <span class="text-success text-sm font-bold"><i class="fa-solid fa-circle-check"></i> Live</span>
          `}
        </div>
      </div>
    </div>
  `;
}

function filterMarketplaceItems() {
    renderMarketplaceItems();
}

function setCategoryFilter(cat) {
    currentCategoryFilter = cat;
    document.querySelectorAll('.category-chip').forEach(chip => {
        if (chip.getAttribute('data-cat') === cat) chip.classList.add('active');
        else chip.classList.remove('active');
    });
    renderMarketplaceItems();
}

function renderOrdersPage() {
    const container = document.getElementById('orders-full-list');
    if (!container) return;

    container.innerHTML = ORDERS_DATABASE.map(order => `
    <div class="order-full-card">
      <div class="order-card-header">
        <span class="order-id-badge"><i class="fa-solid fa-box"></i> ${order.orderId}</span>
        <span class="order-status-pill status-${order.status}">${order.statusLabel}</span>
      </div>

      <div class="order-card-body">
        <img src="${order.image}" alt="${order.title}" class="order-full-img">
        <div class="order-details-info">
          <h4>${order.title}</h4>
          <div class="order-buyer-row">
            <span><i class="fa-solid fa-user"></i> ${order.buyer} (${order.city})</span>
            <span><i class="fa-solid fa-calendar"></i> ${order.date}</span>
          </div>
          <div class="order-audio-note-box">
            <button class="btn-audio-speak" onclick="speakText('${order.buyerVoiceNote}')">
              <i class="fa-solid fa-volume-high"></i>
            </button>
            <span>"${order.buyerVoiceNote}"</span>
          </div>
        </div>
      </div>

      <div class="order-progress-stepper">
        <div class="progress-step-node completed"><i class="fa-solid fa-circle-check"></i> <span>Ordered</span></div>
        <i class="fa-solid fa-arrow-right text-light"></i>
        <div class="progress-step-node ${order.status === 'crafting' ? 'current' : 'completed'}"><i class="fa-solid fa-gear"></i> <span>Crafting</span></div>
        <i class="fa-solid fa-arrow-right text-light"></i>
        <div class="progress-step-node ${order.status === 'packed' ? 'current' : (order.status === 'dispatched' ? 'completed' : '')}"><i class="fa-solid fa-box-open"></i> <span>Packed</span></div>
        <i class="fa-solid fa-arrow-right text-light"></i>
        <div class="progress-step-node ${order.status === 'dispatched' ? 'current' : ''}"><i class="fa-solid fa-truck-fast"></i> <span>In Transit</span></div>
      </div>

      <div class="order-actions-bar">
        <span class="text-sm text-muted"><strong>${order.paymentMethod}</strong> • Total: <strong class="text-emerald">₹${order.amount.toLocaleString('en-IN')}</strong></span>
        <div class="action-btn-group">
          <button class="btn btn-outline-sm" onclick="advanceOrderStatus('${order.orderId}')">
            <i class="fa-solid fa-arrows-rotate"></i> <span>Update Status</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function advanceOrderStatus(orderId) {
    const order = ORDERS_DATABASE.find(o => o.orderId === orderId);
    if (!order) return;

    if (order.status === 'crafting') {
        order.status = 'packed';
        order.statusLabel = 'Ready for Pickup';
    } else if (order.status === 'packed') {
        order.status = 'dispatched';
        order.statusLabel = 'In Transit';
    } else {
        order.status = 'crafting';
        order.statusLabel = 'In Crafting / Loom';
    }

    SoundFX.playSuccess();
    renderOrdersPage();
    renderDashboardOrders();

    const msg = currentLang === 'ta'
        ? `ஆர்டர் ${orderId} நிலை மாற்றப்பட்டது: ${order.statusLabel}`
        : (currentLang === 'hi'
            ? `ऑर्डर ${orderId} की स्थिति अपडेट की गई: ${order.statusLabel}`
            : `Order ${orderId} status updated to ${order.statusLabel}`);
    speakText(msg);
}

function filterOrderTab(statusTab) {
    document.querySelectorAll('.order-tab').forEach(tab => {
        if (tab.getAttribute('data-order-tab') === statusTab) tab.classList.add('active');
        else tab.classList.remove('active');
    });

    const container = document.getElementById('orders-full-list');
    if (!container) return;

    let filtered = ORDERS_DATABASE;
    if (statusTab !== 'all') {
        filtered = ORDERS_DATABASE.filter(o => o.status === statusTab);
    }

    container.innerHTML = filtered.map(order => `
    <div class="order-full-card">
      <div class="order-card-header">
        <span class="order-id-badge"><i class="fa-solid fa-box"></i> ${order.orderId}</span>
        <span class="order-status-pill status-${order.status}">${order.statusLabel}</span>
      </div>
      <div class="order-card-body">
        <img src="${order.image}" alt="${order.title}" class="order-full-img">
        <div class="order-details-info">
          <h4>${order.title}</h4>
          <div class="order-buyer-row">
            <span><i class="fa-solid fa-user"></i> ${order.buyer} (${order.city})</span>
            <span><i class="fa-solid fa-calendar"></i> ${order.date}</span>
          </div>
          <div class="order-audio-note-box">
            <button class="btn-audio-speak" onclick="speakText('${order.buyerVoiceNote}')"><i class="fa-solid fa-volume-high"></i></button>
            <span>"${order.buyerVoiceNote}"</span>
          </div>
        </div>
      </div>
      <div class="order-actions-bar">
        <span class="text-sm text-muted"><strong>${order.paymentMethod}</strong> • Total: <strong class="text-emerald">₹${order.amount.toLocaleString('en-IN')}</strong></span>
        <button class="btn btn-outline-sm" onclick="advanceOrderStatus('${order.orderId}')"><i class="fa-solid fa-arrows-rotate"></i> Update</button>
      </div>
    </div>
  `).join('');
}

function renderProfileGallery() {
    const container = document.getElementById('profile-items-grid');
    if (!container) return;

    container.innerHTML = CRAFT_DATABASE.map(craft => createCraftCardHTML(craft)).join('');
}

function playCraftStoryAudio(craftId) {
    const craft = CRAFT_DATABASE.find(c => c.id === craftId);
    if (!craft) return;
    speakText(craft.voiceStoryText, craft.voiceStoryAudioLang || currentLang);
}

let isProfileStoryPlaying = false;
function toggleProfileAudioStoryPlayback() {
    const wave = document.getElementById('profile-story-waveform');
    const icon = document.getElementById('profile-play-icon');
    const transcriptText = document.getElementById('profile-story-transcript-text');

    if (!isProfileStoryPlaying) {
        isProfileStoryPlaying = true;
        if (wave) wave.classList.add('playing');
        if (icon) { icon.classList.remove('fa-play'); icon.classList.add('fa-pause'); }

        const story = transcriptText ? transcriptText.textContent : getLocalized('profileStoryTranscriptText');
        speakText(story, currentLang, () => {
            isProfileStoryPlaying = false;
            if (wave) wave.classList.remove('playing');
            if (icon) { icon.classList.remove('fa-pause'); icon.classList.add('fa-play'); }
        });
    } else {
        stopSpeech();
        isProfileStoryPlaying = false;
        if (wave) wave.classList.remove('playing');
        if (icon) { icon.classList.remove('fa-pause'); icon.classList.add('fa-play'); }
    }
}

// ==========================================================================
// 10. PRODUCT DETAIL MODAL & BUYER ORDER SIMULATION
// ==========================================================================

function openProductDetailModal(craftId) {
    const craft = CRAFT_DATABASE.find(c => c.id === craftId);
    if (!craft) return;

    const modal = document.getElementById('product-detail-modal');
    const content = document.getElementById('product-modal-content');
    if (!modal || !content) return;

    const title = currentLang === 'ta' && craft.title_ta ? craft.title_ta : (currentLang === 'hi' && craft.title_hi ? craft.title_hi : craft.title);

    content.innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-media">
        <img src="${craft.image}" alt="${title}">
      </div>
      <div class="product-modal-info">
        <div class="origin-badge"><i class="fa-solid fa-certificate text-gold"></i> ${craft.giTag}</div>
        <h2>${title}</h2>
        <div class="price-tag">₹${craft.price.toLocaleString('en-IN')} <small class="text-sm text-success" style="font-size:0.85rem">✓ AI Fair-Price Certified</small></div>

        <div class="artisan-modal-card">
          <img src="${craft.artisanImg}" alt="${craft.artisanName}">
          <div>
            <strong>${craft.artisanName}</strong>
            <div class="text-xs text-muted">${craft.artisanRole} • ${craft.origin}</div>
          </div>
          <button class="btn btn-outline-sm ml-auto" onclick="playCraftStoryAudio('${craft.id}')">
            <i class="fa-solid fa-volume-high"></i> Listen Story
          </button>
        </div>

        <p class="product-desc-text">"${craft.voiceStoryText}"</p>

        <div class="breakdown-row mb-3" style="margin-bottom: 16px; background: #F8FAFC; padding: 10px; border-radius: 8px;">
          <span><i class="fa-solid fa-hand-holding-heart text-primary"></i> 100% Direct Payout to Artisan</span>
          <strong>₹${craft.price.toLocaleString('en-IN')} (0% Commission)</strong>
        </div>

        <button class="btn btn-primary btn-full btn-lg" onclick="simulateBuyerOrder('${craft.id}')">
          <i class="fa-solid fa-bag-shopping"></i> Buy Now (Direct UPI / COD)
        </button>
      </div>
    </div>
  `;

    modal.classList.add('show');
    SoundFX.playChime();
}

function closeProductModal() {
    const modal = document.getElementById('product-detail-modal');
    if (modal) modal.classList.remove('show');
}

function simulateBuyerOrder(craftId) {
    closeProductModal();
    SoundFX.playSuccess();
    const craft = CRAFT_DATABASE.find(c => c.id === craftId);
    if (!craft) return;

    const newOrder = {
        orderId: `CC-ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        title: craft.title,
        image: craft.image,
        buyer: "Meenakshi Sundaram",
        city: "Chennai, TN",
        amount: craft.price,
        date: "Just now",
        status: "crafting",
        statusLabel: "In Crafting / Loom",
        buyerVoiceNote: "Thank you for weaving this authentic heritage craft!",
        paymentMethod: "UPI Direct Transfer"
    };

    ORDERS_DATABASE.unshift(newOrder);
    renderDashboardOrders();
    renderOrdersPage();

    // Show live incoming order notification
    triggerSimulatedOrderVoiceNotification(newOrder);
}

// ==========================================================================
// 11. INCOMING VOICE ORDER AUDIO NOTIFICATION POPUP
// ==========================================================================

function triggerSimulatedOrderVoiceNotification(orderData = null) {
    const popup = document.getElementById('incoming-order-popup');
    const titleEl = document.getElementById('alert-order-title');
    const buyerEl = document.getElementById('alert-order-buyer');

    const order = orderData || ORDERS_DATABASE[0];
    if (!order) return;

    if (titleEl) titleEl.textContent = order.title;
    if (buyerEl) buyerEl.textContent = `Buyer: ${order.buyer}, ${order.city} • ₹${order.amount.toLocaleString('en-IN')}`;

    if (popup) popup.classList.add('show');
    SoundFX.playChime();

    const alertVoice = currentLang === 'ta'
        ? `புதிய ஆர்டர் வந்துள்ளது! ${order.city} நகரிலிருந்து ${order.buyer} என்பவர் ${order.title} ரூ. ${order.amount} விலைக்கு ஆர்டர் செய்துள்ளார்.`
        : (currentLang === 'hi'
            ? `नया ऑर्डर मिला है! ${order.city} से ${order.buyer} ने ₹${order.amount} की ${order.title} का ऑर्डर दिया है।`
            : `New voice order received! ${order.buyer} from ${order.city} ordered ${order.title} for ${order.amount} rupees.`);

    speakText(alertVoice);
}

function acceptIncomingOrder() {
    dismissOrderAlert();
    SoundFX.playSuccess();
    speakText(currentLang === 'ta' ? "ஆர்டர் ஏற்றுக்கொள்ளப்பட்டது! நெசவு நிலைக்கு மாற்றப்பட்டது." : (currentLang === 'hi' ? "ऑर्डर स्वीकार कर लिया गया है!" : "Order accepted! Moved to active loom queue."));
}

function dismissOrderAlert() {
    const popup = document.getElementById('incoming-order-popup');
    if (popup) popup.classList.remove('show');
}

// ==========================================================================
// 12. VOICE ASSISTANT MODAL ("ConnectVaani")
// ==========================================================================

function openVoiceAssistant(context = 'general') {
    const modal = document.getElementById('voice-assistant-modal');
    const statusText = document.getElementById('vaani-status-text');
    const preview = document.getElementById('vaani-live-transcript');
    const langIndicator = document.getElementById('vaani-lang-indicator');

    if (langIndicator) {
        langIndicator.textContent = currentLang === 'ta' ? "தமிழில் பேசுகிறீர்கள் (Speaking Tamil)" : (currentLang === 'hi' ? "हिन्दी में बोल रहे हैं (Speaking Hindi)" : "Speaking in English (தமிழ் / हिन्दी available)");
    }

    if (modal) modal.classList.add('show');
    SoundFX.playMicStart();

    isAssistantListening = true;
    if (statusText) statusText.textContent = getLocalized('vaaniListening');

    const greeting = currentLang === 'ta'
        ? "வணக்கம்! நான் உங்கள் கனெக்ட் வாணி. என்ன விற்க விரும்புகிறீர்கள்?"
        : (currentLang === 'hi'
            ? "नमस्ते! मैं आपकी कनेक्ट वाणी हूँ। आप क्या बेचना चाहते हैं?"
            : "Namaste! I am ConnectVaani. Tell me what craft you want to list or check.");

    speakText(greeting);
}

function closeVoiceAssistant() {
    const modal = document.getElementById('voice-assistant-modal');
    if (modal) modal.classList.remove('show');
    stopSpeech();
    isAssistantListening = false;
}

function toggleAssistantListening() {
    isAssistantListening = !isAssistantListening;
    const btn = document.getElementById('vaani-toggle-listen-btn');
    if (btn) {
        btn.innerHTML = isAssistantListening
            ? `<i class="fa-solid fa-microphone-slash"></i> <span>${getLocalized('pauseMic')}</span>`
            : `<i class="fa-solid fa-microphone"></i> <span>Resume</span>`;
    }
}

function simulateVoiceCommand(cmd) {
    const preview = document.getElementById('vaani-live-transcript');
    if (preview) preview.textContent = `"${cmd}"`;

    if (cmd.includes('saree') || cmd.includes('sell')) {
        closeVoiceAssistant();
        switchView('voice-list');
        applyPresetVoiceListing('saree');
    } else if (cmd.includes('order')) {
        closeVoiceAssistant();
        switchView('orders');
        speakText(currentLang === 'ta' ? "உங்களிடம் 3 ஆர்டர்கள் உள்ளன." : (currentLang === 'hi' ? "आपके पास 3 सक्रिय ऑर्डर हैं।" : "You have 3 active orders to ship."));
    } else if (cmd.includes('income') || cmd.includes('earn')) {
        closeVoiceAssistant();
        switchView('dashboard');
        speakText(currentLang === 'ta' ? "இந்த மாத வருமானம் ₹38,450. அடுத்த வரவு நாளை காலை 10 மணிக்கு." : (currentLang === 'hi' ? "इस महीने की कुल कमाई 38,450 रुपये है।" : "Your total earnings this month are 38,450 rupees."));
    } else {
        speakText(getLocalized('dailyVoiceDigest'));
    }
}

function processVoiceAssistantCommand() {
    const preview = document.getElementById('vaani-live-transcript');
    const text = preview ? preview.textContent : "";
    simulateVoiceCommand(text);
}

// ==========================================================================
// 13. BANK & INCOME MODALS
// ==========================================================================

function showBankDetailsModal() {
    const modal = document.getElementById('bank-modal');
    if (modal) modal.classList.add('show');
}

function closeBankModal() {
    const modal = document.getElementById('bank-modal');
    if (modal) modal.classList.remove('show');
}

function showIncomeDetailsModal() {
    showBankDetailsModal();
}

function saveBankDetails() {
    closeBankModal();
    SoundFX.playSuccess();
    speakText(currentLang === 'ta' ? "வங்கி மற்றும் UPI விவரங்கள் சேமிக்கப்பட்டன!" : (currentLang === 'hi' ? "बैंक खाता और यूपीआई सफलतापूर्वक सहेज लिया गया!" : "Bank account and UPI details verified successfully!"));
}

// ==========================================================================
// 14. ARTISAN ONBOARDING WIZARD CONTROLLER
// ==========================================================================

let onboardCurrentStep = 1;
let onboardSelectedCraft = "Handloom Silk Weaving";

function openOnboardingModal() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) modal.classList.add('show');
    setOnboardingStep(1);
    SoundFX.playChime();
    speakText(currentLang === 'ta' ? "கிராஃப்ட்கனெக்ட் கைவினைஞர் கூத்திற்கு நல்வரவு! உங்கள் தாய்மொழியைத் தேர்ந்தெடுக்கவும்." : (currentLang === 'hi' ? "क्राफ्टकनेक्ट में आपका स्वागत है! अपनी भाषा चुनें।" : "Welcome to CraftConnect! Please select your spoken language."));
}

function closeOnboardingModal() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) modal.classList.remove('show');
}

function setOnboardingStep(step) {
    onboardCurrentStep = step;

    // Dots
    for (let i = 1; i <= 3; i++) {
        const dot = document.getElementById(`onboard-dot-${i}`);
        const pane = document.getElementById(`onboard-step-${i}`);
        if (dot) {
            if (i <= step) dot.classList.add('active');
            else dot.classList.remove('active');
        }
        if (pane) {
            if (i === step) pane.classList.add('active');
            else pane.classList.remove('active');
        }
    }

    if (step === 2) {
        const promptText = currentLang === 'ta'
            ? "மைக் பொத்தானை அழுத்தி: 'என் பெயர் தேவி அம்மாள், காஞ்சிபுரம்' என்று சொல்லுங்கள்"
            : (currentLang === 'hi'
                ? "माइक दबाकर बोलें: 'मेरा नाम देवी अम्मल है, कांचीपुरम से'"
                : 'Press the microphone and say: "My name is Devi Ammal from Kanchipuram"');
        const promptEl = document.getElementById('onboard-voice-prompt');
        if (promptEl) promptEl.textContent = promptText;
        speakText(promptText);
    } else if (step === 3) {
        speakText(currentLang === 'ta' ? "உங்கள் முதன்மை கைவினை வகையைத் தேர்ந்தெடுக்கவும்." : (currentLang === 'hi' ? "अपनी मुख्य कला चुनें।" : "Select your primary craft type for GI authenticity."));
    }
}

function selectOnboardingLang(lang) {
    setLanguage(lang);
    setOnboardingStep(2);
}

function recordOnboardingVoiceBio() {
    SoundFX.playMicStart();
    const micBtn = document.getElementById('onboard-mic-trigger');
    const statusLabel = document.getElementById('onboard-mic-status');

    if (statusLabel) statusLabel.textContent = "Listening... Speak your name & village";
    if (micBtn) micBtn.style.background = "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)";

    setTimeout(() => {
        SoundFX.playSuccess();
        if (statusLabel) statusLabel.textContent = "Recorded: Devi Ammal (Kanchipuram) ✓";
        if (micBtn) micBtn.style.background = "linear-gradient(135deg, var(--emerald) 0%, #047857 100%)";
        speakText(currentLang === 'ta' ? "பெயர் மற்றும் ஊர் பதிவு செய்யப்பட்டது!" : (currentLang === 'hi' ? "नाम और स्थान दर्ज कर लिया गया!" : "Name and village recorded successfully!"));
    }, 2000);
}

function selectOnboardingCraft(element, craftName) {
    document.querySelectorAll('.onboard-craft-tile').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    onboardSelectedCraft = craftName;
    SoundFX.playChime();
}

function completeOnboarding() {
    closeOnboardingModal();
    SoundFX.playSuccess();

    const nameInput = document.getElementById('onboard-artisan-name-input');
    if (nameInput && nameInput.value.trim() !== '') {
        const name = nameInput.value.trim();
        const headerName = document.getElementById('header-artisan-name');
        if (headerName) headerName.textContent = name;
    }

    const welcomeMessage = currentLang === 'ta'
        ? "வாழ்த்துகள்! உங்கள் குரல் வழி கைவினை கூடம் தயார். புதிய பொருளை விற்க மைக் பொத்தானை அழுத்தவும்."
        : (currentLang === 'hi'
            ? "बधाई! आपका वॉइस स्टूडियो तैयार है। नया सामान बेचने के लिए माइक दबाएं।"
            : "Congratulations! Your voice-powered studio is ready. Tap Speak to Sell to list your first craft.");

    speakText(welcomeMessage, currentLang, () => {
        switchView('dashboard');
    });
}

// ==========================================================================
// 15. APP INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initSpeechRecognition();
    updateDashboardGreeting();
    renderDashboardOrders();
    renderMyCraftItems();
    renderMarketplaceItems();
    renderOrdersPage();
    renderProfileGallery();
    updateFairPriceCalculation();
    recalculateStandalonePrice();

    console.log("CraftConnect Voice-First Platform Initialized Successfully.");
});
