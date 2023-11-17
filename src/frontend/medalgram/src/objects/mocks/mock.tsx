
export function loginMock (router: any) {
    document.cookie = "username=True";
    router.push('/profile')
}

export function logoutMock (router: any) {
    document.cookie = "username=False";
    router.push("/")
}