
const user = {
    name : {
        f_N: "shihab",
        l_N: "uddin",
    },
    gender:"male",
    f_color:"soil"

}

const {f_color: m_f_c} = user
const {name:{f_N:m_f_N} } = user;
console.log(m_f_N);
console.log(m_f_c);