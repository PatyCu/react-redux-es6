// functionality extracted from mapStateToProps to be able to test it

export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}
