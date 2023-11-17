
export function loginMock (router: any) {
    if (document === undefined) return;
    document.cookie = "username=True; path=/";
    router.push('/profile')
}

export function logoutMock (router: any) {
    if (document === undefined) return;
    document.cookie = "username=False; path=/";
    router.push("/")
}

export function sportMock () {
    return [
        { id: 1, name: "Deporte 1", description: "Descripcion Deporte 1" },
        { id: 2, name: "Deporte 2", description: "Descripcion Deporte 2" },
        { id: 3, name: "Deporte 3", description: "Descripcion Deporte 3" },
        { id: 4, name: "Deporte 4", description: "Descripcion Deporte 4" },
      ]
}

export function eventsMock() {
    return [
        { idSport: "12", id: "1",name: "8 kms - Florencia", location: "Florencia, Italia", date: "2022-10-23" },
        { idSport: "22", id: "2",name: "10 kms - Oslo", location: "Oslo, Noruega", date: "2023-11-09" },
        { idSport: "32", id: "3",name: "12 Kms - San Francisco", location: "San francisco, EEUU", date: "2024-5-20" },
        { idSport: "42", id: "4",name: "15 Kms - Madrid", location: "Madrid, España", date: "2021-10-10" },
      ]
}

export function oneEventMock() {
    return (
        { idSport: "1", id: "4",name: "15 Kms - Madrid", location: "Madrid, España", date: "2021-10-10", url: "https://links....", kms: "15", edition: "3"}
    )}

    export function commentsMock() {
        return [
            { idEvent: "1", idComment: "4",idRunner: "152501", content: "Muy buena carrera! 😀", date: "2021-10-10"},
            { idEvent: "1", idComment: "4",idRunner: "152501", content: "Me gustó mucho, espero que haya otra edición pronto 😬", date: "2021-10-10"},
            { idEvent: "1", idComment: "4",idRunner: "152501", content: "No pude ir, espero la próxima", date: "2021-10-10"}
        ]}