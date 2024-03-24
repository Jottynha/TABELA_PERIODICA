const elementos = [
    // Período 1
    { simbolo: "H", nome: "Hidrogênio", numeroAtomico: 1, massaAtomica: "1,008", linha: 1, coluna: 1, distribuicaoEletronica: "1s¹" },
    { simbolo: "He", nome: "Hélio", numeroAtomico: 2, massaAtomica: "4,002602", linha: 1, coluna: 18, distribuicaoEletronica: "1s²" },
  
    // Período 2
    { simbolo: "Li", nome: "Lítio", numeroAtomico: 3, massaAtomica: "6,94", linha: 2, coluna: 1, distribuicaoEletronica: "1s² 2s¹" },
    { simbolo: "Be", nome: "Berílio", numeroAtomico: 4, massaAtomica: "9,012183", linha: 2, coluna: 2, distribuicaoEletronica: "1s² 2s²" },
    { simbolo: "B", nome: "Boro", numeroAtomico: 5, massaAtomica: "10,81", linha: 2, coluna: 13, distribuicaoEletronica: "1s² 2s² 2p¹" },
    { simbolo: "C", nome: "Carbono", numeroAtomico: 6, massaAtomica: "12,011", linha: 2, coluna: 14, distribuicaoEletronica: "1s² 2s² 2p²" },
    { simbolo: "N", nome: "Nitrogênio", numeroAtomico: 7, massaAtomica: "14,007", linha: 2, coluna: 15, distribuicaoEletronica: "1s² 2s² 2p³" },
    { simbolo: "O", nome: "Oxigênio", numeroAtomico: 8, massaAtomica: "15,999", linha: 2, coluna: 16, distribuicaoEletronica: "1s² 2s² 2p⁴" },
    { simbolo: "F", nome: "Flúor", numeroAtomico: 9, massaAtomica: "18,998403163", linha: 2, coluna: 17, distribuicaoEletronica: "1s² 2s² 2p⁵" },
    { simbolo: "Ne", nome: "Neônio", numeroAtomico: 10, massaAtomica: "20,1797", linha: 2, coluna: 18, distribuicaoEletronica: "1s² 2s² 2p⁶" },
  
    // Período 3
    { simbolo: "Na", nome: "Sódio", numeroAtomico: 11, massaAtomica: "22,98976928", linha: 3, coluna: 1, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s¹" },
    { simbolo: "Mg", nome: "Magnésio", numeroAtomico: 12, massaAtomica: "24,305", linha: 3, coluna: 2, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s²" },
    { simbolo: "Al", nome: "Alumínio", numeroAtomico: 13, massaAtomica: "26,9815385", linha: 3, coluna: 13, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p¹" },
    { simbolo: "Si", nome: "Silício", numeroAtomico: 14, massaAtomica: "28,085", linha: 3, coluna: 14, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p²" },
    { simbolo: "P", nome: "Fósforo", numeroAtomico: 15, massaAtomica: "30,973761998", linha: 3, coluna: 15, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p³" },
    { simbolo: "S", nome: "Enxofre", numeroAtomico: 16, massaAtomica: "32,06", linha: 3, coluna: 16, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁴" },
    { simbolo: "Cl", nome: "Cloro", numeroAtomico: 17, massaAtomica: "35,45", linha: 3, coluna: 17, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁵" },
    { simbolo: "Ar", nome: "Argônio", numeroAtomico: 18, massaAtomica: "39,948", linha: 3, coluna: 18, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶" },
  
  
    // Período 4
    { simbolo: "K", nome: "Potássio", numeroAtomico: 19, massaAtomica: "39,0983", linha: 4, coluna: 1, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹" },
    { simbolo: "Ca", nome: "Cálcio", numeroAtomico: 20, massaAtomica: "40,078", linha: 4, coluna: 2, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²" },
    { simbolo: "Sc", nome: "Escândio", numeroAtomico: 21, massaAtomica: "44,955908", linha: 4, coluna: 3, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²" },
    { simbolo: "Ti", nome: "Titânio", numeroAtomico: 22, massaAtomica: "47,867", linha: 4, coluna: 4, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²" },
    { simbolo: "V", nome: "Vanádio", numeroAtomico: 23, massaAtomica: "50,9415", linha: 4, coluna: 5, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²" },
    { simbolo: "Cr", nome: "Cromo", numeroAtomico: 24, massaAtomica: "51,9961", linha: 4, coluna: 6, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹" },
    { simbolo: "Mn", nome: "Manganês", numeroAtomico: 25, massaAtomica: "54,938044", linha: 4, coluna: 7, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²" },
    { simbolo: "Fe", nome: "Ferro", numeroAtomico: 26, massaAtomica: "55,845", linha: 4, coluna: 8, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²" },
    { simbolo: "Co", nome: "Cobalto", numeroAtomico: 27, massaAtomica: "58,933194", linha: 4, coluna: 9, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²" },
    { simbolo: "Ni", nome: "Níquel", numeroAtomico: 28, massaAtomica: "58,6934", linha: 4, coluna: 10, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²" },
    { simbolo: "Cu", nome: "Cobre", numeroAtomico: 29, massaAtomica: "63,546", linha: 4, coluna: 11, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹" },
    { simbolo: "Zn", nome: "Zinco", numeroAtomico: 30, massaAtomica: "65,38", linha: 4, coluna: 12, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²" },
    { simbolo: "Ga", nome: "Gálio", numeroAtomico: 31, massaAtomica: "69,723", linha: 4, coluna: 13, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹" },
    { simbolo: "Ge", nome: "Germânio", numeroAtomico: 32, massaAtomica: "72,63", linha: 4, coluna: 14, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²" },
    { simbolo: "As", nome: "Arsênio", numeroAtomico: 33, massaAtomica: "74,921595", linha: 4, coluna: 15, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³" },
    { simbolo: "Se", nome: "Selênio", numeroAtomico: 34, massaAtomica: "78,971", linha: 4, coluna: 16, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴" },
    { simbolo: "Br", nome: "Bromo", numeroAtomico: 35, massaAtomica: "79,904", linha: 4, coluna: 17, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵" },
    { simbolo: "Kr", nome: "Criptônio", numeroAtomico: 36, massaAtomica: "83,798", linha: 4, coluna: 18, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶"},
  
  
    // Período 5
    { simbolo: "Rb", nome: "Rubídio", numeroAtomico: 37, massaAtomica: "85,4678", linha: 5, coluna: 1, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹" },
    { simbolo: "Sr", nome: "Estrôncio", numeroAtomico: 38, massaAtomica: "87,62", linha: 5, coluna: 2, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s²" },
    { simbolo: "Y", nome: "Ítrio", numeroAtomico: 39, massaAtomica: "88,90584", linha: 5, coluna: 3, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹" },
    { simbolo: "Zr", nome: "Zircônio", numeroAtomico: 40, massaAtomica: "91,224", linha: 5, coluna: 4, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d²" },
    { simbolo: "Nb", nome: "Nióbio", numeroAtomico: 41, massaAtomica: "92,90637", linha: 5, coluna: 5, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d³" },
    { simbolo: "Mo", nome: "Molibdênio", numeroAtomico: 42, massaAtomica: "95,95", linha: 5, coluna: 6, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁴" },
    { simbolo: "Tc", nome: "Tecnécio", numeroAtomico: 43, massaAtomica: "98", linha: 5, coluna: 7, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁵" },
    { simbolo: "Ru", nome: "Rutênio", numeroAtomico: 44, massaAtomica: "101,07", linha: 5, coluna: 8, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁶" },
    { simbolo: "Rh", nome: "Ródio", numeroAtomico: 45, massaAtomica: "102,90550", linha: 5, coluna: 9, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁷" },
    { simbolo: "Pd", nome: "Paládio", numeroAtomico: 46, massaAtomica: "106,42", linha: 5, coluna: 10, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁸" },
    { simbolo: "Ag", nome: "Prata", numeroAtomico: 47, massaAtomica: "107,8682", linha: 5, coluna: 11, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰" },
    { simbolo: "Cd", nome: "Cádmio", numeroAtomico: 48, massaAtomica: "112,414", linha: 5, coluna: 12, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p¹" },
    { simbolo: "In", nome: "Índio", numeroAtomico: 49, massaAtomica: "114,818", linha: 5, coluna: 13, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p²" },
    { simbolo: "Sn", nome: "Estanho", numeroAtomico: 50, massaAtomica: "118,710", linha: 5, coluna: 14, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p³" },
    { simbolo: "Sb", nome: "Antimônio", numeroAtomico: 51, massaAtomica: "121,760", linha: 5, coluna: 15, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁴" },
    { simbolo: "Te", nome: "Telúrio", numeroAtomico: 52, massaAtomica: "127,60", linha: 5, coluna: 16, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁴" },
    { simbolo: "I", nome: "Iodo", numeroAtomico: 53, massaAtomica: "126,90447", linha: 5, coluna: 17, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁵" },
    { simbolo: "Xe", nome: "Xenônio", numeroAtomico: 54, massaAtomica: "131,293", linha: 5, coluna: 18, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶" },
  
    { simbolo: "→", nome: "LINHA OITO", linha: 6, coluna: 3 },
  
    // Período 6
    { simbolo: "Cs", nome: "Césio", numeroAtomico: 55, massaAtomica: "132,90545196", linha: 6, coluna: 1, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹" },
    { simbolo: "Ba", nome: "Bário", numeroAtomico: 56, massaAtomica: "137,327", linha: 6, coluna: 2, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s²" },
    { simbolo: "Hf", nome: "Háfnio", numeroAtomico: 72, massaAtomica: "178,49", linha: 6, coluna: 4, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d³" },
    { simbolo: "Ta", nome: "Tântalo", numeroAtomico: 73, massaAtomica: "180,94788", linha: 6, coluna: 5, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁴" },
    { simbolo: "W", nome: "Tungstênio", numeroAtomico: 74, massaAtomica: "183,84", linha: 6, coluna: 6, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁵" },
    { simbolo: "Re", nome: "Rênio", numeroAtomico: 75, massaAtomica: "186,207", linha: 6, coluna: 7, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁶" },
    { simbolo: "Os", nome: "Ósmio", numeroAtomico: 76, massaAtomica: "190,23", linha: 6, coluna: 8, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁷" },
    { simbolo: "Ir", nome: "Irídio", numeroAtomico: 77, massaAtomica: "192,217", linha: 6, coluna: 9, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁸" },
    { simbolo: "Pt", nome: "Platina", numeroAtomico: 78, massaAtomica: "195,084", linha: 6, coluna: 10, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁹" },
    { simbolo: "Au", nome: "Ouro", numeroAtomico: 79, massaAtomica: "196,966569", linha: 6, coluna: 11, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰" },
    { simbolo: "Hg", nome: "Mercúrio", numeroAtomico: 80, massaAtomica: "200,592", linha: 6, coluna: 12, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶" },
    { simbolo: "Tl", nome: "Tálio", numeroAtomico: 81, massaAtomica: "204,38", linha: 6, coluna: 13, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p¹" },
    { simbolo: "Pb", nome: "Chumbo", numeroAtomico: 82, massaAtomica: "207,2", linha: 6, coluna: 14, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p²" },
      { simbolo: "Bi", nome: "Bismuto", numeroAtomico: 83, massaAtomica: "208,9804", linha: 6, coluna: 15, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p³" },
      { simbolo: "Po", nome: "Polônio", numeroAtomico: 84, massaAtomica: "(209)", linha: 6, coluna: 16, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁴" },
      { simbolo: "At", nome: "Astato", numeroAtomico: 85, massaAtomica: "(210)", linha: 6, coluna: 17, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁵" },
      { simbolo: "Rn", nome: "Radônio", numeroAtomico: 86, massaAtomica: "(222)", linha: 6, coluna: 18, distribuicaoEletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶" },
  
  //TRANSIÇÃO INTERNA
    // TRANSIÇÃO INTERNA
    { simbolo: "La", nome: "Lantânio", numeroAtomico: 57, massaAtomica: "138,90547", linha: 8, coluna: 4, distribuicaoEletronica: "[Xe] 5d¹ 6s²" },
    { simbolo: "Ce", nome: "Cério", numeroAtomico: 58, massaAtomica: "140,116", linha: 8, coluna: 5, distribuicaoEletronica: "[Xe] 4f¹ 5d¹ 6s²" },
    { simbolo: "Pr", nome: "Praseodímio", numeroAtomico: 59, massaAtomica: "140,90766", linha: 8, coluna: 6, distribuicaoEletronica: "[Xe] 4f³ 6s²" },
    { simbolo: "Nd", nome: "Neodímio", numeroAtomico: 60, massaAtomica: "144,242", linha: 8, coluna: 7, distribuicaoEletronica: "[Xe] 4f⁴ 6s²" },
    { simbolo: "Pm", nome: "Promécio", numeroAtomico: 61, massaAtomica: "145", linha: 8, coluna: 8, distribuicaoEletronica: "[Xe] 4f⁵ 6s²" },
    { simbolo: "Sm", nome: "Samário", numeroAtomico: 62, massaAtomica: "150,36", linha: 8, coluna: 9, distribuicaoEletronica: "[Xe] 4f⁶ 6s²" },
    { simbolo: "Eu", nome: "Európio", numeroAtomico: 63, massaAtomica: "151,964", linha: 8, coluna: 10, distribuicaoEletronica: "[Xe] 4f⁷ 6s²" },
    { simbolo: "Gd", nome: "Gadolínio", numeroAtomico: 64, massaAtomica: "157,25", linha: 8, coluna: 11, distribuicaoEletronica: "[Xe] 4f⁷ 5d¹ 6s²" },
    { simbolo: "Tb", nome: "Térbio", numeroAtomico: 65, massaAtomica: "158,92535", linha: 8, coluna: 12, distribuicaoEletronica: "[Xe] 4f⁹ 6s²" },
    { simbolo: "Dy", nome: "Disprósio", numeroAtomico: 66, massaAtomica: "162,500", linha: 8, coluna: 13, distribuicaoEletronica: "[Xe] 4f¹⁰ 6s²" },
    { simbolo: "Ho", nome: "Hólmio", numeroAtomico: 67, massaAtomica: "164,93033", linha: 8, coluna: 14, distribuicaoEletronica: "[Xe] 4f¹¹ 6s²" },
    { simbolo: "Er", nome: "Érbio", numeroAtomico: 68, massaAtomica: "167,259", linha: 8, coluna: 15, distribuicaoEletronica: "[Xe] 4f¹² 6s²" },
    { simbolo: "Tm", nome: "Túlio", numeroAtomico: 69, massaAtomica: "168,93422", linha: 8, coluna: 16, distribuicaoEletronica: "[Xe] 4f¹³ 6s²" },
    { simbolo: "Yb", nome: "Itérbio", numeroAtomico: 70, massaAtomica: "173,045", linha: 8, coluna: 17, distribuicaoEletronica: "[Xe] 4f¹⁴ 6s²" },
    { simbolo: "Lu", nome: "Lutécio", numeroAtomico: 71, massaAtomica: "174,9668", linha: 8, coluna: 18, distribuicaoEletronica: "[Xe] 4f¹⁴ 5d¹ 6s²" },
  
  
  
    { simbolo: "→", nome: "LINHA NOVE", linha: 7, coluna: 3 },
    // Período 7
    // Período 7
    { simbolo: "Fr", nome: "Frâncio", numeroAtomico: 87, massaAtomica: "(223)", linha: 7, coluna: 1, distribuicaoEletronica: "[Rn] 7s¹" },
    { simbolo: "Ra", nome: "Rádio", numeroAtomico: 88, massaAtomica: "(226)", linha: 7, coluna: 2, distribuicaoEletronica: "[Rn] 7s²" },
    { simbolo: "Ac", nome: "Actínio", numeroAtomico: 89, massaAtomica: "(227)", linha: 9, coluna: 4, distribuicaoEletronica: "[Rn] 6d¹ 7s²" },
    { simbolo: "Th", nome: "Tório", numeroAtomico: 90, massaAtomica: "232,0377", linha: 9, coluna: 5, distribuicaoEletronica: "[Rn] 6d² 7s²" },
    { simbolo: "Pa", nome: "Protactínio", numeroAtomico: 91, massaAtomica: "231,03588", linha: 9, coluna: 6, distribuicaoEletronica: "[Rn] 5f² 6d¹ 7s²" },
    { simbolo: "U", nome: "Urânio", numeroAtomico: 92, massaAtomica: "238,02891", linha: 9, coluna: 7, distribuicaoEletronica: "[Rn] 5f³ 6d¹ 7s²" },
    { simbolo: "Np", nome: "Neptúnio", numeroAtomico: 93, massaAtomica: "(237)", linha: 9, coluna: 8, distribuicaoEletronica: "[Rn] 5f⁴ 6d¹ 7s²" },
    { simbolo: "Pu", nome: "Plutônio", numeroAtomico: 94, massaAtomica: "(244)", linha: 9, coluna: 9, distribuicaoEletronica: "[Rn] 5f⁶ 7s²" },
    { simbolo: "Am", nome: "Amerício", numeroAtomico: 95, massaAtomica: "(243)", linha: 9, coluna: 10, distribuicaoEletronica: "[Rn] 5f⁷ 7s²" },
    { simbolo: "Cm", nome: "Cúrio", numeroAtomico: 96, massaAtomica: "(247)", linha: 9, coluna: 11, distribuicaoEletronica: "[Rn] 5f⁷ 6d¹ 7s²" },
    { simbolo: "Bk", nome: "Berquélio", numeroAtomico: 97, massaAtomica: "(247)", linha: 9, coluna: 12, distribuicaoEletronica: "[Rn] 5f⁹ 7s²" },
    { simbolo: "Cf", nome: "Califórnio", numeroAtomico: 98, massaAtomica: "(251)", linha: 9, coluna: 13, distribuicaoEletronica: "[Rn] 5f¹⁰ 7s²" },
    { simbolo: "Es", nome: "Einstênio", numeroAtomico: 99, massaAtomica: "(252)", linha: 9, coluna: 14, distribuicaoEletronica: "[Rn] 5f¹¹ 7s²" },
    { simbolo: "Fm", nome: "Férmio", numeroAtomico: 100, massaAtomica: "(257)", linha: 9, coluna: 15, distribuicaoEletronica: "[Rn] 5f¹² 7s²" },
    { simbolo: "Md", nome: "Mendelévio", numeroAtomico: 101, massaAtomica: "(258)", linha: 9, coluna: 16, distribuicaoEletronica: "[Rn] 5f¹³ 7s²" },
    { simbolo: "No", nome: "Nobélio", numeroAtomico: 102, massaAtomica: "(259)", linha: 9, coluna: 17, distribuicaoEletronica: "[Rn] 5f¹⁴ 7s²" },
    { simbolo: "Lr", nome: "Laurêncio", numeroAtomico: 103, massaAtomica: "(266)", linha: 9, coluna: 18, distribuicaoEletronica: "[Rn] 5f¹⁴ 6d¹ 7s²" },
  
  
    // Período 8 (elementos sintéticos)
    { 
      simbolo: "Rf", 
      nome: "Rutherfórdio", 
      numeroAtomico: 104, 
      massaAtomica: "(267)", 
      linha: 7, 
      coluna: 4, 
      distribuicaoEletronica: "[Rn] 5f14 6d2 7s2" 
    },
    { 
      simbolo: "Db", 
      nome: "Dúbnio", 
      numeroAtomico: 105, 
      massaAtomica: "(268)", 
      linha: 7, 
      coluna: 5, 
      distribuicaoEletronica: "[Rn] 5f14 6d3 7s2" 
    },
    { 
      simbolo: "Sg", 
      nome: "Seabórgio", 
      numeroAtomico: 106, 
      massaAtomica: "(269)", 
      linha: 7, 
      coluna: 6, 
      distribuicaoEletronica: "[Rn] 5f14 6d4 7s2" 
    },
    { 
      simbolo: "Bh", 
      nome: "Bóhrio", 
      numeroAtomico: 107, 
      massaAtomica: "(270)", 
      linha: 7, 
      coluna: 7, 
      distribuicaoEletronica: "[Rn] 5f14 6d5 7s2" 
    },
    { 
      simbolo: "Hs", 
      nome: "Hássio", 
      numeroAtomico: 108, 
      massaAtomica: "(269)", 
      linha: 7, 
      coluna: 8, 
      distribuicaoEletronica: "[Rn] 5f14 6d6 7s2" 
    },
    { 
      simbolo: "Mt", 
      nome: "Meitnério", 
      numeroAtomico: 109, 
      massaAtomica: "(278)", 
      linha: 7, 
      coluna: 9, 
      distribuicaoEletronica: "[Rn] 5f14 6d7 7s2" 
    },
    { 
      simbolo: "Ds", 
      nome: "Darmstádio", 
      numeroAtomico: 110, 
      massaAtomica: "(281)", 
      linha: 7, 
      coluna: 10, 
      distribuicaoEletronica: "[Rn] 5f14 6d9 7s1" 
    },
    { 
      simbolo: "Rg", 
      nome: "Roentgênio", 
      numeroAtomico: 111, 
      massaAtomica: "(282)", 
      linha: 7, 
      coluna: 11, 
      distribuicaoEletronica: "[Rn] 5f14 6d10 7s1" 
    },
    { 
      simbolo: "Cn", 
      nome: "Copernício", 
      numeroAtomico: 112, 
      massaAtomica: "(285)", 
      linha: 7, 
      coluna: 12, 
      distribuicaoEletronica: "[Rn] 5f14 6d10 7s2" 
    },
    { 
      simbolo: "Nh", 
      nome: "Nihônio", 
      numeroAtomico: 113, 
      massaAtomica: "(286)", 
      linha: 7, 
      coluna: 13, 
      distribuicaoEletronica: "[Rn] 5f14 6d10 7s2 7p1" 
    },
    { 
      simbolo: "Fl", 
      nome: "Fleróvio", 
      numeroAtomico: 114, 
      massaAtomica: "(289)", 
      linha: 7, 
      coluna: 14, 
      distribuicaoEletronica: "[Rn] 5f14 6d10 7s2 7p2" 
    },
    { 
      simbolo: "Mc", 
      nome: "Moscóvio", 
      numeroAtomico: 115, 
      massaAtomica: "(290)", 
      linha: 7, 
      coluna: 15, 
      distribuicaoEletronica: "[Rn] 5f14 6d10 7s2 7p3" 
    },
    { 
      simbolo: "Lv", 
      nome: "Livermório", 
      numeroAtomico: 116, 
      massaAtomica: "(293)", 
      linha: 7, 
      coluna: 16, 
      distribuicaoEletronica: "[Rn] 5f14 6d10 7s2 7p4" 
    },
    { 
      simbolo: "Ts", 
      nome: "Tenessino", 
      numeroAtomico: 117, 
      massaAtomica: "(294)", 
      linha: 7, 
      coluna: 17, 
      distribuicaoEletronica: "[Rn] 5f14 6d10 7s2 7p5" 
    },
    { 
      simbolo: "Og", 
      nome: "Ogânio", 
      numeroAtomico: 118, 
      massaAtomica: "(294)", 
      linha: 7, 
      coluna: 18, 
      distribuicaoEletronica: "[Rn] 5f14 6d10 7s2 7p6" 
    }
  
  ,
  ];
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const tabelaPeriodica = document.getElementById("periodic-table");
  
    elementos.forEach(elemento => {
      const atomicNumber = document.createElement('div');
      const elementoDiv = document.createElement("div");
      elementoDiv.classList.add("element");
      elementoDiv.textContent = elemento.simbolo;
      elementoDiv.style.gridRow = elemento.linha;
      elementoDiv.style.gridColumn = elemento.coluna;
      elementoDiv.appendChild(atomicNumber);
      tabelaPeriodica.appendChild(elementoDiv);
      atomicNumber.classList.add('atomic-number');
      atomicNumber.textContent = elemento.numeroAtomico;
      elementoDiv.classList.add(`periodo-${elemento.linha}`);
  
      if (elemento.simbolo !== "→") {
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("element-info");
        infoDiv.innerHTML = `
            <strong>${elemento.nome}</strong><br>
            Número Atômico: ${elemento.numeroAtomico}<br>
            Massa Atômica: ${elemento.massaAtomica}<br>
            Distribuição Eletrônica: ${elemento.distribuicaoEletronica}
        `;
        elementoDiv.appendChild(infoDiv);
  
        // Criando um quadrado de informações
        const infoQuad = document.createElement("div");
        infoQuad.classList.add("element-info-quad");
        infoQuad.innerHTML = `
            <strong>${elemento.nome}</strong><br>
            Número Atômico: ${elemento.numeroAtomico}<br>
            Massa Atômica: ${elemento.massaAtomica}<br>
            Distribuição Eletrônica: ${elemento.distribuicaoEletronica}
        `;
        tabelaPeriodica.appendChild(infoQuad);
        infoQuad.style.gridRow = elemento.linha;
        infoQuad.style.gridColumn = "13"; // Posicione conforme necessário
  
        // Esconder o quadrado de informações por padrão
        infoQuad.style.display = "none";
  
        elementoDiv.addEventListener("mouseenter", function() {
          infoDiv.style.display = "block";
          infoQuad.style.display = "block";
        });
  
        elementoDiv.addEventListener("mouseleave", function() {
          infoDiv.style.display = "none";
          infoQuad.style.display = "none";
        });
      } else {
        // Adiciona uma classe à linha 8
        const linha8 = document.querySelectorAll('[style="grid-row: 6;"]');
        if(elemento.nome == "LINHA OITO"){
          elementoDiv.style.backgroundColor = "#75f6ff"; // Cor do período 8
        }
        else {
          elementoDiv.style.backgroundColor = "#b6a8c2"; // Cor do período 9
        }
        linha8.forEach(elemento => {
          elemento.classList.add("row-8");
        });
      }
    });
  });
  