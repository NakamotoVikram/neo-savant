import { validation } from "@zilliqa-js/util";

const getParamType = ({ type }) => {
    const regex = /(?<List>List (.+))|(?<ByStr20>ByStr20)|(?<String>String)|(?<ByStr>ByStr)(\d{1,})?|(?<Uint>Uint)\d{1,}|(?<Int>Int)\d{1,}|(?<BNum>BNum)|(?<Pair>Pair)/;
    
    const res = type.match(regex);
    let foundType = null;

    if (res !== null) {
        const results = res.groups;

        for (let key in results) {
            if (results[key] !== undefined) {
                foundType = key;
                break;
            }
        }
    }
    return foundType;
}

const validateParam = ({ type, value }) => {
    // console.log('validating', type, value);
    switch (type) {
        case 'ByStr20': {
            try {
                if (validation.isAddress(value)) {
                    return true;
                }

                throw new Error('ByStr20 should be an address.');
            } catch (error) {
                throw new Error('ByStr20 should be an address.');
            }
        }
        case 'List': {
            try {
                value = JSON.parse(value);
            } catch (e) {
                throw new Error('Lists should be defined as arrays: []');
            }

            if (!Array.isArray(value)) {
                throw new Error('Lists should be defined as arrays: []');
            }
            return true;
        }
        case 'Uint': {
            if ((value && !Number.isInteger(parseInt(value))) || parseInt(value) < 0) {
                throw new Error('Uint should be a positive integer number.');
            }
            return true;
        }
        case 'Int': {
            if (value && !Number.isInteger(parseInt(value))) {
                throw new Error('Int should be a integer number.');
            }
            return true;
        }
        default:
            return true;
    }
}

const validateParams = (params) => {
    let errors = false;
    for (let param of params) {
        param.validationErrors = false;
        try {
            const type = getParamType({ type: param.type });
            validateParam({ ...param, type });
        } catch (error) {
            errors = true;
            param.validationErrors = error.message;
        }
    }

    return { errors, params };
}

export { validateParams, getParamType };