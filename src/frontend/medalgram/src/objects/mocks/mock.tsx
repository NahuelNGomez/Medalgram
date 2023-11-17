
export function loginMock (router: any) {
    if (document === undefined) return;
    document.cookie = "username=True; path=/";
    router.push('/profile')
    window.location.reload();
}

export function logoutMock (router: any) {
    if (document === undefined) return;
    document.cookie = "username=False; path=/";
    router.push("/")
    window.location.reload();
}

export function sportMock () {
    return [
        { id: "1", name: "Deporte 1", description: "Descripcion Deporte 1" },
        { id: "2", name: "Deporte 2", description: "Descripcion Deporte 2" },
        { id: "3", name: "Deporte 3", description: "Descripcion Deporte 3" },
        { id: "4", name: "Deporte 4", description: "Descripcion Deporte 4" },
      ]
}