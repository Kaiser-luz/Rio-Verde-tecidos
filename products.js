const PRODUTOS = [
  {
    "id": 1,
    "nome": "Tecido Jeans 001",
    "categoria": "jeans",
    "preco": "R$ 35,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 1</text>  </svg>"
  },
  {
    "id": 2,
    "nome": "Tecido Malha 002",
    "categoria": "malha",
    "preco": "R$ 25,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 2</text>  </svg>"
  },
  {
    "id": 3,
    "nome": "Tecido Seda 003",
    "categoria": "seda",
    "preco": "R$ 50,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 3</text>  </svg>"
  },
  {
    "id": 4,
    "nome": "Tecido Tricoline 004",
    "categoria": "tricoline",
    "preco": "R$ 25,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 4</text>  </svg>"
  },
  {
    "id": 5,
    "nome": "Tecido Tricoline 005",
    "categoria": "tricoline",
    "preco": "R$ 32,02",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 5</text>  </svg>"
  },
  {
    "id": 6,
    "nome": "Tecido Linho 006",
    "categoria": "linho",
    "preco": "R$ 74,49",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 6</text>  </svg>"
  },
  {
    "id": 7,
    "nome": "Tecido Jeans 007",
    "categoria": "jeans",
    "preco": "R$ 24,03",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 7</text>  </svg>"
  },
  {
    "id": 8,
    "nome": "Tecido Seda 008",
    "categoria": "seda",
    "preco": "R$ 30,70",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 8</text>  </svg>"
  },
  {
    "id": 9,
    "nome": "Tecido Algodão 009",
    "categoria": "algodao",
    "preco": "R$ 66,79",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 9</text>  </svg>"
  },
  {
    "id": 10,
    "nome": "Tecido Jeans 010",
    "categoria": "jeans",
    "preco": "R$ 25,39",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 10</text>  </svg>"
  },
  {
    "id": 11,
    "nome": "Tecido Tricoline 011",
    "categoria": "tricoline",
    "preco": "R$ 29,44",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 11</text>  </svg>"
  },
  {
    "id": 12,
    "nome": "Tecido Seda 012",
    "categoria": "seda",
    "preco": "R$ 48,48",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 12</text>  </svg>"
  },
  {
    "id": 13,
    "nome": "Tecido Malha 013",
    "categoria": "malha",
    "preco": "R$ 22,90",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 13</text>  </svg>"
  },
  {
    "id": 14,
    "nome": "Tecido Malha 014",
    "categoria": "malha",
    "preco": "R$ 28,98",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 14</text>  </svg>"
  },
  {
    "id": 15,
    "nome": "Tecido Algodão 015",
    "categoria": "algodao",
    "preco": "R$ 85,90",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 15</text>  </svg>"
  },
  {
    "id": 16,
    "nome": "Tecido Algodão 016",
    "categoria": "algodao",
    "preco": "R$ 51,21",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 16</text>  </svg>"
  },
  {
    "id": 17,
    "nome": "Tecido Tricoline 017",
    "categoria": "tricoline",
    "preco": "R$ 41,32",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 17</text>  </svg>"
  },
  {
    "id": 18,
    "nome": "Tecido Tricoline 018",
    "categoria": "tricoline",
    "preco": "R$ 21,22",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 18</text>  </svg>"
  },
  {
    "id": 19,
    "nome": "Tecido Linho 019",
    "categoria": "linho",
    "preco": "R$ 72,96",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 19</text>  </svg>"
  },
  {
    "id": 20,
    "nome": "Tecido Tricoline 020",
    "categoria": "tricoline",
    "preco": "R$ 44,47",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 20</text>  </svg>"
  },
  {
    "id": 21,
    "nome": "Tecido Linho 021",
    "categoria": "linho",
    "preco": "R$ 87,63",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 21</text>  </svg>"
  },
  {
    "id": 22,
    "nome": "Tecido Tricoline 022",
    "categoria": "tricoline",
    "preco": "R$ 24,34",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 22</text>  </svg>"
  },
  {
    "id": 23,
    "nome": "Tecido Jeans 023",
    "categoria": "jeans",
    "preco": "R$ 89,70",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 23</text>  </svg>"
  },
  {
    "id": 24,
    "nome": "Tecido Malha 024",
    "categoria": "malha",
    "preco": "R$ 77,32",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 24</text>  </svg>"
  },
  {
    "id": 25,
    "nome": "Tecido Linho 025",
    "categoria": "linho",
    "preco": "R$ 22,06",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 25</text>  </svg>"
  },
  {
    "id": 26,
    "nome": "Tecido Seda 026",
    "categoria": "seda",
    "preco": "R$ 65,94",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 26</text>  </svg>"
  },
  {
    "id": 27,
    "nome": "Tecido Malha 027",
    "categoria": "malha",
    "preco": "R$ 76,41",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 27</text>  </svg>"
  },
  {
    "id": 28,
    "nome": "Tecido Tricoline 028",
    "categoria": "tricoline",
    "preco": "R$ 37,88",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 28</text>  </svg>"
  },
  {
    "id": 29,
    "nome": "Tecido Seda 029",
    "categoria": "seda",
    "preco": "R$ 52,80",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 29</text>  </svg>"
  },
  {
    "id": 30,
    "nome": "Tecido Seda 030",
    "categoria": "seda",
    "preco": "R$ 75,66",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 30</text>  </svg>"
  },
  {
    "id": 31,
    "nome": "Tecido Seda 031",
    "categoria": "seda",
    "preco": "R$ 44,11",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 31</text>  </svg>"
  },
  {
    "id": 32,
    "nome": "Tecido Seda 032",
    "categoria": "seda",
    "preco": "R$ 84,34",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 32</text>  </svg>"
  },
  {
    "id": 33,
    "nome": "Tecido Linho 033",
    "categoria": "linho",
    "preco": "R$ 41,84",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 33</text>  </svg>"
  },
  {
    "id": 34,
    "nome": "Tecido Jeans 034",
    "categoria": "jeans",
    "preco": "R$ 78,26",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 34</text>  </svg>"
  },
  {
    "id": 35,
    "nome": "Tecido Seda 035",
    "categoria": "seda",
    "preco": "R$ 46,76",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 35</text>  </svg>"
  },
  {
    "id": 36,
    "nome": "Tecido Algodão 036",
    "categoria": "algodao",
    "preco": "R$ 66,59",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 36</text>  </svg>"
  },
  {
    "id": 37,
    "nome": "Tecido Linho 037",
    "categoria": "linho",
    "preco": "R$ 46,64",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 37</text>  </svg>"
  },
  {
    "id": 38,
    "nome": "Tecido Seda 038",
    "categoria": "seda",
    "preco": "R$ 79,50",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 38</text>  </svg>"
  },
  {
    "id": 39,
    "nome": "Tecido Linho 039",
    "categoria": "linho",
    "preco": "R$ 69,96",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 39</text>  </svg>"
  },
  {
    "id": 40,
    "nome": "Tecido Linho 040",
    "categoria": "linho",
    "preco": "R$ 41,70",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 40</text>  </svg>"
  },
  {
    "id": 41,
    "nome": "Tecido Jeans 041",
    "categoria": "jeans",
    "preco": "R$ 28,85",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 41</text>  </svg>"
  },
  {
    "id": 42,
    "nome": "Tecido Malha 042",
    "categoria": "malha",
    "preco": "R$ 29,02",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 42</text>  </svg>"
  },
  {
    "id": 43,
    "nome": "Tecido Jeans 043",
    "categoria": "jeans",
    "preco": "R$ 57,29",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 43</text>  </svg>"
  },
  {
    "id": 44,
    "nome": "Tecido Algodão 044",
    "categoria": "algodao",
    "preco": "R$ 89,54",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 44</text>  </svg>"
  },
  {
    "id": 45,
    "nome": "Tecido Linho 045",
    "categoria": "linho",
    "preco": "R$ 27,83",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 45</text>  </svg>"
  },
  {
    "id": 46,
    "nome": "Tecido Linho 046",
    "categoria": "linho",
    "preco": "R$ 40,49",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 46</text>  </svg>"
  },
  {
    "id": 47,
    "nome": "Tecido Linho 047",
    "categoria": "linho",
    "preco": "R$ 54,97",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 47</text>  </svg>"
  },
  {
    "id": 48,
    "nome": "Tecido Malha 048",
    "categoria": "malha",
    "preco": "R$ 89,24",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 48</text>  </svg>"
  },
  {
    "id": 49,
    "nome": "Tecido Seda 049",
    "categoria": "seda",
    "preco": "R$ 26,23",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 49</text>  </svg>"
  },
  {
    "id": 50,
    "nome": "Tecido Jeans 050",
    "categoria": "jeans",
    "preco": "R$ 43,99",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 50</text>  </svg>"
  },
  {
    "id": 51,
    "nome": "Tecido Jeans 051",
    "categoria": "jeans",
    "preco": "R$ 45,59",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 51</text>  </svg>"
  },
  {
    "id": 52,
    "nome": "Tecido Algodão 052",
    "categoria": "algodao",
    "preco": "R$ 77,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 52</text>  </svg>"
  },
  {
    "id": 53,
    "nome": "Tecido Jeans 053",
    "categoria": "jeans",
    "preco": "R$ 25,91",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 53</text>  </svg>"
  },
  {
    "id": 54,
    "nome": "Tecido Seda 054",
    "categoria": "seda",
    "preco": "R$ 76,59",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 54</text>  </svg>"
  },
  {
    "id": 55,
    "nome": "Tecido Jeans 055",
    "categoria": "jeans",
    "preco": "R$ 75,92",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 55</text>  </svg>"
  },
  {
    "id": 56,
    "nome": "Tecido Algodão 056",
    "categoria": "algodao",
    "preco": "R$ 30,87",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 56</text>  </svg>"
  },
  {
    "id": 57,
    "nome": "Tecido Linho 057",
    "categoria": "linho",
    "preco": "R$ 45,22",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 57</text>  </svg>"
  },
  {
    "id": 58,
    "nome": "Tecido Malha 058",
    "categoria": "malha",
    "preco": "R$ 31,92",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 58</text>  </svg>"
  },
  {
    "id": 59,
    "nome": "Tecido Malha 059",
    "categoria": "malha",
    "preco": "R$ 36,96",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 59</text>  </svg>"
  },
  {
    "id": 60,
    "nome": "Tecido Tricoline 060",
    "categoria": "tricoline",
    "preco": "R$ 53,03",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 60</text>  </svg>"
  },
  {
    "id": 61,
    "nome": "Tecido Malha 061",
    "categoria": "malha",
    "preco": "R$ 83,21",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 61</text>  </svg>"
  },
  {
    "id": 62,
    "nome": "Tecido Linho 062",
    "categoria": "linho",
    "preco": "R$ 31,60",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 62</text>  </svg>"
  },
  {
    "id": 63,
    "nome": "Tecido Seda 063",
    "categoria": "seda",
    "preco": "R$ 66,97",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 63</text>  </svg>"
  },
  {
    "id": 64,
    "nome": "Tecido Tricoline 064",
    "categoria": "tricoline",
    "preco": "R$ 49,08",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 64</text>  </svg>"
  },
  {
    "id": 65,
    "nome": "Tecido Algodão 065",
    "categoria": "algodao",
    "preco": "R$ 37,84",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 65</text>  </svg>"
  },
  {
    "id": 66,
    "nome": "Tecido Malha 066",
    "categoria": "malha",
    "preco": "R$ 26,53",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 66</text>  </svg>"
  },
  {
    "id": 67,
    "nome": "Tecido Malha 067",
    "categoria": "malha",
    "preco": "R$ 37,38",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 67</text>  </svg>"
  },
  {
    "id": 68,
    "nome": "Tecido Jeans 068",
    "categoria": "jeans",
    "preco": "R$ 75,70",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 68</text>  </svg>"
  },
  {
    "id": 69,
    "nome": "Tecido Tricoline 069",
    "categoria": "tricoline",
    "preco": "R$ 87,61",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 69</text>  </svg>"
  },
  {
    "id": 70,
    "nome": "Tecido Linho 070",
    "categoria": "linho",
    "preco": "R$ 46,55",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 70</text>  </svg>"
  },
  {
    "id": 71,
    "nome": "Tecido Seda 071",
    "categoria": "seda",
    "preco": "R$ 46,31",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 71</text>  </svg>"
  },
  {
    "id": 72,
    "nome": "Tecido Linho 072",
    "categoria": "linho",
    "preco": "R$ 34,20",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 72</text>  </svg>"
  },
  {
    "id": 73,
    "nome": "Tecido Algodão 073",
    "categoria": "algodao",
    "preco": "R$ 60,49",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 73</text>  </svg>"
  },
  {
    "id": 74,
    "nome": "Tecido Jeans 074",
    "categoria": "jeans",
    "preco": "R$ 61,63",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 74</text>  </svg>"
  },
  {
    "id": 75,
    "nome": "Tecido Tricoline 075",
    "categoria": "tricoline",
    "preco": "R$ 41,55",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 75</text>  </svg>"
  },
  {
    "id": 76,
    "nome": "Tecido Algodão 076",
    "categoria": "algodao",
    "preco": "R$ 86,63",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 76</text>  </svg>"
  },
  {
    "id": 77,
    "nome": "Tecido Tricoline 077",
    "categoria": "tricoline",
    "preco": "R$ 78,94",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 77</text>  </svg>"
  },
  {
    "id": 78,
    "nome": "Tecido Tricoline 078",
    "categoria": "tricoline",
    "preco": "R$ 21,60",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 78</text>  </svg>"
  },
  {
    "id": 79,
    "nome": "Tecido Seda 079",
    "categoria": "seda",
    "preco": "R$ 68,05",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 79</text>  </svg>"
  },
  {
    "id": 80,
    "nome": "Tecido Jeans 080",
    "categoria": "jeans",
    "preco": "R$ 89,59",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 80</text>  </svg>"
  },
  {
    "id": 81,
    "nome": "Tecido Linho 081",
    "categoria": "linho",
    "preco": "R$ 39,59",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 81</text>  </svg>"
  },
  {
    "id": 82,
    "nome": "Tecido Seda 082",
    "categoria": "seda",
    "preco": "R$ 46,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 82</text>  </svg>"
  },
  {
    "id": 83,
    "nome": "Tecido Seda 083",
    "categoria": "seda",
    "preco": "R$ 34,68",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 83</text>  </svg>"
  },
  {
    "id": 84,
    "nome": "Tecido Seda 084",
    "categoria": "seda",
    "preco": "R$ 72,34",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 84</text>  </svg>"
  },
  {
    "id": 85,
    "nome": "Tecido Malha 085",
    "categoria": "malha",
    "preco": "R$ 56,95",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 85</text>  </svg>"
  },
  {
    "id": 86,
    "nome": "Tecido Linho 086",
    "categoria": "linho",
    "preco": "R$ 80,16",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 86</text>  </svg>"
  },
  {
    "id": 87,
    "nome": "Tecido Jeans 087",
    "categoria": "jeans",
    "preco": "R$ 65,59",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 87</text>  </svg>"
  },
  {
    "id": 88,
    "nome": "Tecido Malha 088",
    "categoria": "malha",
    "preco": "R$ 59,65",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 88</text>  </svg>"
  },
  {
    "id": 89,
    "nome": "Tecido Linho 089",
    "categoria": "linho",
    "preco": "R$ 30,15",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 89</text>  </svg>"
  },
  {
    "id": 90,
    "nome": "Tecido Jeans 090",
    "categoria": "jeans",
    "preco": "R$ 56,22",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 90</text>  </svg>"
  },
  {
    "id": 91,
    "nome": "Tecido Linho 091",
    "categoria": "linho",
    "preco": "R$ 68,60",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 91</text>  </svg>"
  },
  {
    "id": 92,
    "nome": "Tecido Jeans 092",
    "categoria": "jeans",
    "preco": "R$ 45,59",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 92</text>  </svg>"
  },
  {
    "id": 93,
    "nome": "Tecido Algodão 093",
    "categoria": "algodao",
    "preco": "R$ 64,02",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 93</text>  </svg>"
  },
  {
    "id": 94,
    "nome": "Tecido Algodão 094",
    "categoria": "algodao",
    "preco": "R$ 37,46",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 94</text>  </svg>"
  },
  {
    "id": 95,
    "nome": "Tecido Algodão 095",
    "categoria": "algodao",
    "preco": "R$ 39,32",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 95</text>  </svg>"
  },
  {
    "id": 96,
    "nome": "Tecido Tricoline 096",
    "categoria": "tricoline",
    "preco": "R$ 48,35",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 96</text>  </svg>"
  },
  {
    "id": 97,
    "nome": "Tecido Algodão 097",
    "categoria": "algodao",
    "preco": "R$ 68,43",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 97</text>  </svg>"
  },
  {
    "id": 98,
    "nome": "Tecido Seda 098",
    "categoria": "seda",
    "preco": "R$ 47,57",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 98</text>  </svg>"
  },
  {
    "id": 99,
    "nome": "Tecido Linho 099",
    "categoria": "linho",
    "preco": "R$ 26,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 99</text>  </svg>"
  },
  {
    "id": 100,
    "nome": "Tecido Tricoline 100",
    "categoria": "tricoline",
    "preco": "R$ 89,65",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 100</text>  </svg>"
  },
  {
    "id": 101,
    "nome": "Tecido Jeans 101",
    "categoria": "jeans",
    "preco": "R$ 63,75",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 101</text>  </svg>"
  },
  {
    "id": 102,
    "nome": "Tecido Linho 102",
    "categoria": "linho",
    "preco": "R$ 84,16",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 102</text>  </svg>"
  },
  {
    "id": 103,
    "nome": "Tecido Tricoline 103",
    "categoria": "tricoline",
    "preco": "R$ 69,86",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 103</text>  </svg>"
  },
  {
    "id": 104,
    "nome": "Tecido Algodão 104",
    "categoria": "algodao",
    "preco": "R$ 29,50",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 104</text>  </svg>"
  },
  {
    "id": 105,
    "nome": "Tecido Malha 105",
    "categoria": "malha",
    "preco": "R$ 39,19",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 105</text>  </svg>"
  },
  {
    "id": 106,
    "nome": "Tecido Seda 106",
    "categoria": "seda",
    "preco": "R$ 48,39",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 106</text>  </svg>"
  },
  {
    "id": 107,
    "nome": "Tecido Algodão 107",
    "categoria": "algodao",
    "preco": "R$ 31,89",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 107</text>  </svg>"
  },
  {
    "id": 108,
    "nome": "Tecido Linho 108",
    "categoria": "linho",
    "preco": "R$ 35,43",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 108</text>  </svg>"
  },
  {
    "id": 109,
    "nome": "Tecido Tricoline 109",
    "categoria": "tricoline",
    "preco": "R$ 89,65",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 109</text>  </svg>"
  },
  {
    "id": 110,
    "nome": "Tecido Algodão 110",
    "categoria": "algodao",
    "preco": "R$ 22,81",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 110</text>  </svg>"
  },
  {
    "id": 111,
    "nome": "Tecido Linho 111",
    "categoria": "linho",
    "preco": "R$ 80,36",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 111</text>  </svg>"
  },
  {
    "id": 112,
    "nome": "Tecido Seda 112",
    "categoria": "seda",
    "preco": "R$ 87,10",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 112</text>  </svg>"
  },
  {
    "id": 113,
    "nome": "Tecido Jeans 113",
    "categoria": "jeans",
    "preco": "R$ 34,27",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 113</text>  </svg>"
  },
  {
    "id": 114,
    "nome": "Tecido Seda 114",
    "categoria": "seda",
    "preco": "R$ 75,43",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 114</text>  </svg>"
  },
  {
    "id": 115,
    "nome": "Tecido Algodão 115",
    "categoria": "algodao",
    "preco": "R$ 33,33",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 115</text>  </svg>"
  },
  {
    "id": 116,
    "nome": "Tecido Malha 116",
    "categoria": "malha",
    "preco": "R$ 37,27",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 116</text>  </svg>"
  },
  {
    "id": 117,
    "nome": "Tecido Algodão 117",
    "categoria": "algodao",
    "preco": "R$ 86,69",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 117</text>  </svg>"
  },
  {
    "id": 118,
    "nome": "Tecido Algodão 118",
    "categoria": "algodao",
    "preco": "R$ 81,82",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 118</text>  </svg>"
  },
  {
    "id": 119,
    "nome": "Tecido Seda 119",
    "categoria": "seda",
    "preco": "R$ 43,12",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 119</text>  </svg>"
  },
  {
    "id": 120,
    "nome": "Tecido Algodão 120",
    "categoria": "algodao",
    "preco": "R$ 32,03",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 120</text>  </svg>"
  },
  {
    "id": 121,
    "nome": "Tecido Jeans 121",
    "categoria": "jeans",
    "preco": "R$ 26,09",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 121</text>  </svg>"
  },
  {
    "id": 122,
    "nome": "Tecido Linho 122",
    "categoria": "linho",
    "preco": "R$ 68,51",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 122</text>  </svg>"
  },
  {
    "id": 123,
    "nome": "Tecido Malha 123",
    "categoria": "malha",
    "preco": "R$ 56,29",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 123</text>  </svg>"
  },
  {
    "id": 124,
    "nome": "Tecido Linho 124",
    "categoria": "linho",
    "preco": "R$ 30,40",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 124</text>  </svg>"
  },
  {
    "id": 125,
    "nome": "Tecido Malha 125",
    "categoria": "malha",
    "preco": "R$ 57,19",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 125</text>  </svg>"
  },
  {
    "id": 126,
    "nome": "Tecido Linho 126",
    "categoria": "linho",
    "preco": "R$ 35,55",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 126</text>  </svg>"
  },
  {
    "id": 127,
    "nome": "Tecido Tricoline 127",
    "categoria": "tricoline",
    "preco": "R$ 61,01",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 127</text>  </svg>"
  },
  {
    "id": 128,
    "nome": "Tecido Algodão 128",
    "categoria": "algodao",
    "preco": "R$ 64,30",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 128</text>  </svg>"
  },
  {
    "id": 129,
    "nome": "Tecido Algodão 129",
    "categoria": "algodao",
    "preco": "R$ 88,01",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 129</text>  </svg>"
  },
  {
    "id": 130,
    "nome": "Tecido Tricoline 130",
    "categoria": "tricoline",
    "preco": "R$ 54,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 130</text>  </svg>"
  },
  {
    "id": 131,
    "nome": "Tecido Tricoline 131",
    "categoria": "tricoline",
    "preco": "R$ 89,76",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 131</text>  </svg>"
  },
  {
    "id": 132,
    "nome": "Tecido Seda 132",
    "categoria": "seda",
    "preco": "R$ 35,50",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 132</text>  </svg>"
  },
  {
    "id": 133,
    "nome": "Tecido Algodão 133",
    "categoria": "algodao",
    "preco": "R$ 41,20",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 133</text>  </svg>"
  },
  {
    "id": 134,
    "nome": "Tecido Algodão 134",
    "categoria": "algodao",
    "preco": "R$ 82,73",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 134</text>  </svg>"
  },
  {
    "id": 135,
    "nome": "Tecido Malha 135",
    "categoria": "malha",
    "preco": "R$ 27,61",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 135</text>  </svg>"
  },
  {
    "id": 136,
    "nome": "Tecido Malha 136",
    "categoria": "malha",
    "preco": "R$ 35,31",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 136</text>  </svg>"
  },
  {
    "id": 137,
    "nome": "Tecido Algodão 137",
    "categoria": "algodao",
    "preco": "R$ 66,40",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 137</text>  </svg>"
  },
  {
    "id": 138,
    "nome": "Tecido Linho 138",
    "categoria": "linho",
    "preco": "R$ 73,15",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 138</text>  </svg>"
  },
  {
    "id": 139,
    "nome": "Tecido Malha 139",
    "categoria": "malha",
    "preco": "R$ 66,56",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 139</text>  </svg>"
  },
  {
    "id": 140,
    "nome": "Tecido Algodão 140",
    "categoria": "algodao",
    "preco": "R$ 61,27",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 140</text>  </svg>"
  },
  {
    "id": 141,
    "nome": "Tecido Malha 141",
    "categoria": "malha",
    "preco": "R$ 77,89",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 141</text>  </svg>"
  },
  {
    "id": 142,
    "nome": "Tecido Seda 142",
    "categoria": "seda",
    "preco": "R$ 45,64",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 142</text>  </svg>"
  },
  {
    "id": 143,
    "nome": "Tecido Jeans 143",
    "categoria": "jeans",
    "preco": "R$ 21,04",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 143</text>  </svg>"
  },
  {
    "id": 144,
    "nome": "Tecido Tricoline 144",
    "categoria": "tricoline",
    "preco": "R$ 80,82",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 144</text>  </svg>"
  },
  {
    "id": 145,
    "nome": "Tecido Algodão 145",
    "categoria": "algodao",
    "preco": "R$ 61,26",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 145</text>  </svg>"
  },
  {
    "id": 146,
    "nome": "Tecido Linho 146",
    "categoria": "linho",
    "preco": "R$ 28,79",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 146</text>  </svg>"
  },
  {
    "id": 147,
    "nome": "Tecido Linho 147",
    "categoria": "linho",
    "preco": "R$ 70,84",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 147</text>  </svg>"
  },
  {
    "id": 148,
    "nome": "Tecido Malha 148",
    "categoria": "malha",
    "preco": "R$ 79,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 148</text>  </svg>"
  },
  {
    "id": 149,
    "nome": "Tecido Malha 149",
    "categoria": "malha",
    "preco": "R$ 57,52",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 149</text>  </svg>"
  },
  {
    "id": 150,
    "nome": "Tecido Tricoline 150",
    "categoria": "tricoline",
    "preco": "R$ 71,12",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 150</text>  </svg>"
  },
  {
    "id": 151,
    "nome": "Tecido Tricoline 151",
    "categoria": "tricoline",
    "preco": "R$ 58,76",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 151</text>  </svg>"
  },
  {
    "id": 152,
    "nome": "Tecido Algodão 152",
    "categoria": "algodao",
    "preco": "R$ 24,03",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 152</text>  </svg>"
  },
  {
    "id": 153,
    "nome": "Tecido Tricoline 153",
    "categoria": "tricoline",
    "preco": "R$ 46,08",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 153</text>  </svg>"
  },
  {
    "id": 154,
    "nome": "Tecido Linho 154",
    "categoria": "linho",
    "preco": "R$ 57,61",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 154</text>  </svg>"
  },
  {
    "id": 155,
    "nome": "Tecido Algodão 155",
    "categoria": "algodao",
    "preco": "R$ 81,16",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 155</text>  </svg>"
  },
  {
    "id": 156,
    "nome": "Tecido Malha 156",
    "categoria": "malha",
    "preco": "R$ 56,84",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 156</text>  </svg>"
  },
  {
    "id": 157,
    "nome": "Tecido Linho 157",
    "categoria": "linho",
    "preco": "R$ 82,11",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 157</text>  </svg>"
  },
  {
    "id": 158,
    "nome": "Tecido Tricoline 158",
    "categoria": "tricoline",
    "preco": "R$ 25,75",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 158</text>  </svg>"
  },
  {
    "id": 159,
    "nome": "Tecido Linho 159",
    "categoria": "linho",
    "preco": "R$ 65,85",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 159</text>  </svg>"
  },
  {
    "id": 160,
    "nome": "Tecido Linho 160",
    "categoria": "linho",
    "preco": "R$ 82,36",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 160</text>  </svg>"
  },
  {
    "id": 161,
    "nome": "Tecido Malha 161",
    "categoria": "malha",
    "preco": "R$ 80,61",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 161</text>  </svg>"
  },
  {
    "id": 162,
    "nome": "Tecido Jeans 162",
    "categoria": "jeans",
    "preco": "R$ 76,32",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 162</text>  </svg>"
  },
  {
    "id": 163,
    "nome": "Tecido Tricoline 163",
    "categoria": "tricoline",
    "preco": "R$ 78,26",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 163</text>  </svg>"
  },
  {
    "id": 164,
    "nome": "Tecido Tricoline 164",
    "categoria": "tricoline",
    "preco": "R$ 24,57",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 164</text>  </svg>"
  },
  {
    "id": 165,
    "nome": "Tecido Malha 165",
    "categoria": "malha",
    "preco": "R$ 61,33",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 165</text>  </svg>"
  },
  {
    "id": 166,
    "nome": "Tecido Seda 166",
    "categoria": "seda",
    "preco": "R$ 31,00",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 166</text>  </svg>"
  },
  {
    "id": 167,
    "nome": "Tecido Malha 167",
    "categoria": "malha",
    "preco": "R$ 28,52",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 167</text>  </svg>"
  },
  {
    "id": 168,
    "nome": "Tecido Jeans 168",
    "categoria": "jeans",
    "preco": "R$ 33,93",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 168</text>  </svg>"
  },
  {
    "id": 169,
    "nome": "Tecido Jeans 169",
    "categoria": "jeans",
    "preco": "R$ 68,84",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 169</text>  </svg>"
  },
  {
    "id": 170,
    "nome": "Tecido Seda 170",
    "categoria": "seda",
    "preco": "R$ 37,05",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 170</text>  </svg>"
  },
  {
    "id": 171,
    "nome": "Tecido Algodão 171",
    "categoria": "algodao",
    "preco": "R$ 29,27",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 171</text>  </svg>"
  },
  {
    "id": 172,
    "nome": "Tecido Seda 172",
    "categoria": "seda",
    "preco": "R$ 25,83",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 172</text>  </svg>"
  },
  {
    "id": 173,
    "nome": "Tecido Seda 173",
    "categoria": "seda",
    "preco": "R$ 64,12",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 173</text>  </svg>"
  },
  {
    "id": 174,
    "nome": "Tecido Jeans 174",
    "categoria": "jeans",
    "preco": "R$ 55,65",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 174</text>  </svg>"
  },
  {
    "id": 175,
    "nome": "Tecido Algodão 175",
    "categoria": "algodao",
    "preco": "R$ 52,87",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 175</text>  </svg>"
  },
  {
    "id": 176,
    "nome": "Tecido Jeans 176",
    "categoria": "jeans",
    "preco": "R$ 48,75",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 176</text>  </svg>"
  },
  {
    "id": 177,
    "nome": "Tecido Algodão 177",
    "categoria": "algodao",
    "preco": "R$ 79,88",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 177</text>  </svg>"
  },
  {
    "id": 178,
    "nome": "Tecido Algodão 178",
    "categoria": "algodao",
    "preco": "R$ 50,28",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 178</text>  </svg>"
  },
  {
    "id": 179,
    "nome": "Tecido Seda 179",
    "categoria": "seda",
    "preco": "R$ 44,93",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 179</text>  </svg>"
  },
  {
    "id": 180,
    "nome": "Tecido Linho 180",
    "categoria": "linho",
    "preco": "R$ 39,53",
    "img": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>  <rect width='100%' height='100%' fill='%23e5e7eb'/>  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%236b7280'>Imagem 180</text>  </svg>"
  }
];
