export const parseUserRoleResult = (result) => {
    const UserRole = { id: result.id, ...result.attributes }


    return UserRole
}
