// Lógica dos dados

//Estruturação dos dados

export class Favorites{
    constructor(root){
        this.root = document.querySelector(root)
    }
}

//Visualização e eventos do HTML
export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.update()
    }

    update(){
        this.removeAllTr()

        const tr = `
        <tr>
            <td class="user">
                <img src="https://github.com/mewerton.png" alt="Imagem de Mewerton">
                <a href="https://github.com/mewerton" target="_blank"></a>
                <p>Mewerton Melo</p>
                <span>mewerton</span>
            </td>
            <td class="repositories">
                11
            </td>
            <td class="followers">
                12
            </td>
            <td>
                <button class="remove">&times;</button>
            </td>
        </tr>
        `
    }

    removeAllTr(){
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}

