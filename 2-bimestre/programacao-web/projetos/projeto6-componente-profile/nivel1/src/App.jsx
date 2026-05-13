import Profile from "./components/Profile/index.jsx"
import "./styles/Profile.css"

const funcionarios = [
  {
    nome: "Mariana Costa",
    idade: 29,
    profissao: "UX Designer",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nome: "Rafael Melo",
    idade: 34,
    profissao: "Engenheiro de Software",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nome: "Isabela Torres",
    idade: 27,
    profissao: "Product Manager",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
  },
]

export default function App() {
  return (
    <div className="profile-grid">
      {funcionarios.map((funcionario) => (
        <Profile
          key={funcionario.nome}
          noome={funcionario.nome}
          idade={funcionario.idade}
          profissao={funcionario.profissao}
          foto={funcionario.foto}
        />
      )
    )
  }
    </div>
  )
}