const bookForm = document.getElementById('bookForm');
    const incompleteBookList = document.getElementById('incompleteBookList');
    const completeBookList = document.getElementById('completeBookList');

    bookForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('bookFormTitle').value;
      const author = document.getElementById('bookFormAuthor').value;
      const year = document.getElementById('bookFormYear').value;
      const isComplete = document.getElementById('bookFormIsComplete').checked;

      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
        <h3>${title}</h3>
        <p>✍️ Penulis: ${author}</p>
        <p>📅 Tahun: ${year}</p>
        <div>
          <button onclick="toggleBookStatus(this)">
            ${isComplete ? '🔄 Belum selesai' : '✅ Selesai dibaca'}
          </button>
          <button onclick="deleteBook(this)">🗑️ Hapus</button>
        </div>
      `;

      if (isComplete) {
        completeBookList.appendChild(bookItem);
      } else {
        incompleteBookList.appendChild(bookItem);
      }

      bookForm.reset();
    });

    function toggleBookStatus(button) {
      const bookItem = button.closest('.book-item');
      const currentList = bookItem.parentElement.id;
      const targetList = currentList === 'incompleteBookList' ? completeBookList : incompleteBookList;

      button.textContent = currentList === 'incompleteBookList'
        ? '🔄 Belum selesai'
        : '✅ Selesai dibaca';

      targetList.appendChild(bookItem);
    }

    function deleteBook(button) {
      const bookItem = button.closest('.book-item');
      bookItem.remove();
    }