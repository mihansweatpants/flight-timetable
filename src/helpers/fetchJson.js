export default function fetchJson(url, options = {}) {
    return new Promise((resolve, reject) =>
        fetch(url, options)
            .then(res => (!res.ok ? reject(res) : res))
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    );
}