export default function ({dispatch}) {
    return next => action => {
        if(!action.payload || !action.payload.then){
            return next(action);
        }
        action.payload
            .then(function (res) {
                const newAction = {...action, payload: res.data};
                dispatch(newAction);
            });
    }
}