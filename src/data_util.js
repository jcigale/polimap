import { elecResults } from './elec_obj.js';

export const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

export const byYear = () => {
    let data = elecResults
    let hash = {};
    hash[1789] = []
    for (let year=1792; year<=2020; year+=4) {
                hash[year] = []      
    }

    for (let i=0; i<data.length; i++) {
        if (data[i].Year.includes(1789)){
            hash[1789].push(data[i]);
        }
        for (let year=1792; year<=2020; year+=4) {
            if (data[i].Year.includes(year)){
                hash[year].push(data[i])
            }
        }
    }
    return hash
}

export const stateAbrv = {
    'Alabama' : 'al',
    'Alaska' : 'ak',
    'Arizona' : 'az',
    'Arkansas' : 'ar',
    'California' : 'ca',
    'Colorado' : 'co',
    'Connecticut' : 'ct',
    'Delaware' : 'de',
    'Florida' : 'fl',
    'Georgia' : 'ga', 
    'Hawaii' : 'hi', 
    'Idaho' : 'id', 
    'Illinois' : 'il', 
    'Indiana' : 'in', 
    'Iowa' : 'ia', 
    'Kansas' : 'ks', 
    'Kentucky' : 'ky', 
    'Louisiana' : 'la', 
    'Maine' : 'me', 
    'Maryland' : 'md', 
    'Massachusetts' : 'ma', 
    'Michigan' : 'mi', 
    'Minnesota' : 'mn', 
    'Mississippi': 'ms', 
    'Missouri' : 'mo', 
    'Montana' : 'mt', 
    'Nebraska' : 'ne', 
    'Nevada' : 'nv', 
    'New Hampshire' : 'nh', 
    'New Jersey' : 'nj', 
    'New Mexico' : 'nm', 
    'New York' : 'ny', 
    'North Carolina' : 'nc', 
    'North Dakota' : 'nd', 
    'Ohio' : 'oh', 
    'Oklahoma' : 'ok', 
    'Oregon' : 'or', 
    'Pennsylvania' : 'pe', 
    'Rhode Island' : 'ri', 
    'South Carolina' : 'sc', 
    'South Dakota' : 'sd', 
    'Tennessee' : 'tn', 
    'Texas' : 'tx', 
    'Utah' : 'ut', 
    'Vermont' : 'vt', 
    'Washington' : 'wa', 
    'West Virginia' : 'wv', 
    'Wisconsin' : 'wi', 
    'Wyoming' : 'wy'
}

export const parties = {
    'Republican': '#FF0000',
    'Democrat': '#0015BC',
    'Other' : '#FED105',
    'Whig' : '#4B0082',
    'Democratic-Republican' : '#87CEFA',
    'Federalist' : '#DB7093',
}
