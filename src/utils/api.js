class Api {

    getExercises(lang = 'it') {
        const code = lang === 'it' ? 2 : 4;
        return fetch(`https://wger.de/api/v2/exercise/?language=${code}&limit=6`, {
            header: {
                'Authorization': 'Token 72b0d02afe03b6d90963d897e488c8bc987c3f87'
            }
        })
            .then(response => response.json())
    }


    saveForm(formData) {
        return fetch('https://discord.com/api/webhooks/1255281611646439475/ypkGvbzNkU1iWDBvLnbNxJCy2ENiUZ2okg0FU9qBW15av0V8WG4Es8IXyhasMrGVzcrR', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: formData
            })
        })
    }
}

export const api = new Api();