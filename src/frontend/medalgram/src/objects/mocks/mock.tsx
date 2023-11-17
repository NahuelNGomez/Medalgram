
export function loginMock (router: any) {
    if (document === undefined) return;
    document.cookie = "username=True";
    router.push('/profile')
}

export function logoutMock (router: any) {
    if (document === undefined) return;
    document.cookie = "username=False";
    router.push("/")
}