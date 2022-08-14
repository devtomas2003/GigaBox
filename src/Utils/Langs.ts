export const Dashboard = {
    "pt": {
        "homeTitle": "Pagina Inicial",
        "wifiTitle": "WiFi",
        "WanTitle": "WAN",
        "AdvancedTitle": "Avançado",
        "toolsTitle": "Ferramentas"
    },
    "en": {
        "homeTitle": "Home",
        "wifiTitle": "WiFi",
        "WanTitle": "WAN",
        "AdvancedTitle": "Advanced",
        "toolsTitle": "Tools"
    }
};

export const IP = {
    "pt": {
        "configIP": "Configurar IP",
        "routerIP": "Endereço IP do GigaBox:",
        "configDHCP": "Configurar DHCP",
        "dhcpEnable": "Ativar DHCP:",
        "ipRange": "Intrevalo de IPs:",
        "submask": "Máscara de Rede:",
        "mainDNS": "DNS Primário:",
        "bckDNS": "DNS Secundário:",
        "leaseTxt": "Tempo de aluguer:",
        "mins": "Minutos",
        "saveBtn": "Guardar"
    },
    "en": {
        "configIP": "Configure IP",
        "routerIP": "GigaBox IP Address:",
        "configDHCP": "Configure DHCP",
        "dhcpEnable": "Enable DHCP:",
        "ipRange": "IPs Range:",
        "submask": "Subnet Mask:",
        "mainDNS": "Main DNS:",
        "bckDNS": "Secundary DNS:",
        "leaseTxt": "Lease Time:",
        "mins": "Minutes",
        "saveBtn": "Save"
    }
};

export const APN = {
    "pt": {
        "configAPN": "Definições dos APNs",
        "addAPN": "Adicionar APN",
        "editAPN": "Editar APN",
        "smallAPN": "Nome",
        "apnTit": "APN",
        "typeAPN": "Tipo de APN",
        "accTit": "Ações",
        "sugEdit": "Editar este APN",
        "sugRem": "Remover este APN",
        "mncTit": "MNC",
        "mccTit": "MCC",
        "resetBtn": "Repor APNs",
        "voiceTxt": "Apenas Voz",
        "dataTxt": "Apenas Dados",
        "dataVozTxt": "Dados + Voz",
        "userlbl": "Utilizador:",
        "passlbl": "Password:",
        "saveBtn": "Guardar",
        "resetAPNs": "Têm a certeza que deseja repor os APNs?"
    },
    "en": {
        "configAPN": "Configure APN",
        "addAPN": "Add APN",
        "editAPN": "Edit APN",
        "smallAPN": "Name",
        "apnTit": "APN",
        "typeAPN": "APN Type",
        "accTit": "Actions",
        "sugEdit": "Edit this APN",
        "sugRem": "Remove this APN",
        "mncTit": "MNC",
        "mccTit": "MCC",
        "resetBtn": "Reset APN",
        "voiceTxt": "Only Voice",
        "dataTxt": "Only Data",
        "dataVozTxt": "Data + Voice",
        "userlbl": "Username:",
        "passlbl": "Password:",
        "saveBtn": "Save",
        "resetAPNs": "Are you sure you want to reset APNs?"
    }
};

export const Voice = {
    "pt": {
        "configVoice": "Configurar Voz",
        "extTitle": "Extensão:",
        "extState": "Estado do Proxy:",
        "extStatus": "Estado do Registo:",
        "ok": "OK",
        "userTxt": "Utilizador VOIP Local:",
        "passTxt": "Password VOIP Local:",
        "stateAct": "Ativo"
    },
    "en": {
        "configVoice": "Configure Voice",
        "extTitle": "Extension:",
        "extState": "Proxy Status:",
        "extStatus": "Register State:",
        "ok": "OK",
        "userTxt": "Local VOIP Username:",
        "passTxt": "Local VOIP Password:",
        "stateAct": "Active"
    }
};

export const Roaming = {
    "pt": {
        "configRoaming": "Configurar Roaming",
        "allowData": "Ativar Dados em Roaming:",
        "allowVoice": "Ativar Voz em Roaming:",
        "saveBtn": "Guardar"
    },
    "en": {
        "configRoaming": "Configure Roaming",
        "allowData": "Enable Data Roaming:",
        "allowVoice": "Enable Voice Roaming:",
        "saveBtn": "Save"
    }
};

export type PropsLang = {
    homeTitle?: string;
    wifiTitle?: string;
    WanTitle?: string;
    AdvancedTitle?: string;
    toolsTitle?: string;
    configIP?: string;
    routerIP?: string;
    configDHCP?: string;
    dhcpEnable?: string;
    ipRange?: string;
    submask?: string;
    mainDNS?: string;
    bckDNS?: string;
    leaseTxt?: string;
    mins?: string;
    saveBtn?: string;
    configAPN?: string;
    addAPN?: string;
    editAPN?: string;
    smallAPN?: string;
    apnTit?: string;
    typeAPN?: string;
    accTit?: string;
    sugEdit?: string;
    sugRem?: string;
    mncTit?: string;
    mccTit?: string;
    resetBtn?: string;
    voiceTxt?: string;
    dataTxt?: string;
    dataVozTxt?: string;
    userlbl?: string;
    passlbl?: string;
    resetAPNs?: string;
    configVoice?: string;
    extTitle?: string;
    extState?: string;
    stateAct?: string;
    extStatus?: string;
    configRoaming?: string;
    allowData?: string;
    allowVoice?: string;
    ok?: string;
    userTxt?: string;
    passTxt?: string;
};