const log = console.log
const error = console.error

const url = 'https://reqres.in/api/users?page=3'

const xhr = function(url) {
    return new Future(function(rej, res) {
        const oReq = new XMLHttpRequest()
        oReq.addEventListener("load", res, false)
        oReq.addEventListener("error", rej, false)
        oReq.addEventListener("abort", rej, false)
        oReq.open("get", url, true)
        oReq.send()
    });
};

const future = R.map(R.compose(S.fromMaybe({err:'Something went wrong'}), 
                               S.parseJson(Object),
                               R.path(['target', 'response'])))

const fork = R.invoker(2, 'fork')
const run = compose(fork(error, log), future, xhr)

run(url)
