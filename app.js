const payBtn = document.getElementById('pay-btn');
      const score = document.getElementById('score');
      payBtn.onclick = () => {
        payBtn.outerHTML = '<span class="badge paid">Paid</span>';
        score.style.transform = 'scale(1.2)';
        setTimeout(() => {
          let current = 780;
          const int = setInterval(() => {
            current++;
            score.innerText = current;
            if(current === 795) { clearInterval(int); score.style.transform = 'scale(1)'; }
          }, 30);
        }, 300);
      };