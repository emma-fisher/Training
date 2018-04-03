function attachTitle(firstargument) {
    return 'DR. ' + firstargument;
}



Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);