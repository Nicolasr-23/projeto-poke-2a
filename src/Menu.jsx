import './Menu.css'

const Menu =()=>{

    return (
        <div>
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" href="/home">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/pokeflex">
                        PokeFlex
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/pokegrid">
                        Pokegrid
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Menu