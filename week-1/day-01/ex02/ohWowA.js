/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ohWowA.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: flo-dolc <flo-dolc@student.42roma.it>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/04/23 22:32:11 by flo-dolc          #+#    #+#             */
/*   Updated: 2024/04/24 03:04:52 by flo-dolc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function flipImage() {
  const img = document.querySelector("img");
  img.style.transform =
    img.style.transform === "rotateY(180deg)"
      ? "rotateY(0deg)"
      : "rotateY(180deg)";
  img.style.transition = "transform 1s";
  setTimeout(() => {
    img.src =
      img.src ===
      "https://pbs.twimg.com/profile_images/783186796347654144/S5FEKyG8_400x400.jpg"
        ? "https://cdn.thingiverse.com/renders/ac/ed/04/60/20/398bea45ada103cb4a57e0fc3a7af75d_display_large.jpg"
        : "https://pbs.twimg.com/profile_images/783186796347654144/S5FEKyG8_400x400.jpg";
  }, 350);
}

function flipName() {
  const name = document.querySelector(".card h1");
  name.textContent =
    name.textContent === "Wilhelm Reinhardt"
      ? "Gianni Morandi"
      : "Wilhelm Reinhardt";
}

function addCard() {
  var container = document.querySelector(".container");
  var cardToClone = document.querySelector(".card");
  var clonedCard = cardToClone.cloneNode(true);
  container.appendChild(clonedCard);
}

// Listeners
