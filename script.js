document.getElementById('name-generator-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const industry = document.getElementById('industry').value;
  const preferences = document.getElementById('preferences').value;

  const generatedNames = generateBusinessNames(industry, preferences);

  const nameList = document.getElementById('name-list');
  nameList.innerHTML = '';

  generatedNames.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    nameList.appendChild(listItem);
  });
});

function generateBusinessNames(industry, preferences) {
  // Mock AI-powered name generation logic
  const names = [
    `<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>f</mi><mi>e</mi><mi>r</mi><mi>e</mi><mi>n</mi><mi>c</mi><mi>e</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">{preferences} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mord mathnormal">re</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">ere</span><span class="mord mathnormal">n</span><span class="mord mathnormal">ces</span></span></span></span></span>{industry} Solutions`,
    `${industry} Innovations`,
    `NextGen ${industry}`,
    `<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>f</mi><mi>e</mi><mi>r</mi><mi>e</mi><mi>n</mi><mi>c</mi><mi>e</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">{preferences} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mord mathnormal">re</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">ere</span><span class="mord mathnormal">n</span><span class="mord mathnormal">ces</span></span></span></span></span>{industry} Hub`,
    `${industry} Dynamics`
  ];

  return names;
}
