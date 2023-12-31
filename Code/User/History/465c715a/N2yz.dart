import 'dart:html';

import 'package:flutter/material.dart';

class SignUpScreen extends StatefulWidget {
  const SignUpScreen({super.key});

  @override
  State<SignUpScreen> createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  TextEditingController? nameTextEditingController = TextEditingController();
  TextEditingController? phoneTextEditingController = TextEditingController();
  TextEditingController? emailTextEditingController = TextEditingController();
  TextEditingController? passwordTextEditingController =
      TextEditingController();
  // TextEditingController? nameTextEditingController;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SingleChildScrollView(
          child: Padding(
        padding: const EdgeInsets.all(15.0),
        child: Column(
          children: [
            //Dear Future Front-end Team , i am working on the core functunality of this is signup page
            //so please add the design juice and sheo your creativity on the project
            //add image for logo , add animations, add anything ,your wish
            //! And Dear Future Backend Team Or Me , I am Sorry bro , in my defence , mai thakka hua hu
            //toh gande code ki maffi dedo , aur mai aalsi toh huu
            const SizedBox(
              height: 86,
            ),

            const Center(
              child: Text(
                "Register Bus",
                style: TextStyle(
                    fontSize: 28,
                    color: Colors.grey,
                    fontWeight: FontWeight.bold),
              ),
            ),

            TextField(
              controller: nameTextEditingController,
              keyboardType: TextInputType.text,
              style: const TextStyle(color: Colors.white, fontSize: 18),
              decoration: const InputDecoration(
                labelText: "Name",
                hintText: "Naam Kya Hai aapka??",
                enabledBorder: UnderlineInputBorder(
                    borderSide: BorderSide(color: Colors.white60)),
                focusedBorder: UnderlineInputBorder(
                    borderSide: BorderSide(color: Colors.white60)),
                hintStyle: TextStyle(color: Colors.grey, fontSize: 12),
                labelStyle: TextStyle(color: Colors.amberAccent, fontSize: 22),
              ),
            ),
            TextField(
              controller: phoneTextEditingController,
              keyboardType: TextInputType.phone,
              style: const TextStyle(color: Colors.white, fontSize: 18),
              decoration: const InputDecoration(
                labelText: "Phone No",
                hintText: "+91 99999 99999",
                enabledBorder: UnderlineInputBorder(
                    borderSide: BorderSide(color: Colors.white60)),
                focusedBorder: UnderlineInputBorder(
                    borderSide: BorderSide(color: Colors.white60)),
                hintStyle: TextStyle(color: Colors.grey, fontSize: 12),
                labelStyle: TextStyle(color: Colors.amberAccent, fontSize: 22),
              ),
            ),
            TextField(
              controller: emailTextEditingController,
              keyboardType: TextInputType.emailAddress,
              style: const TextStyle(color: Colors.white, fontSize: 18),
              decoration: const InputDecoration(
                labelText: "Email",
                hintText: "example@exmpl.com",
                enabledBorder: UnderlineInputBorder(
                    borderSide: BorderSide(color: Colors.white60)),
                focusedBorder: UnderlineInputBorder(
                    borderSide: BorderSide(color: Colors.white60)),
                hintStyle: TextStyle(color: Colors.grey, fontSize: 12),
                labelStyle: TextStyle(color: Colors.amberAccent, fontSize: 22),
              ),
            ),
            TextField(
              controller: passwordTextEditingController,
              keyboardType: TextInputType.text,
              style: const TextStyle(color: Colors.white, fontSize: 18),
              obscureText: true,
              decoration: const InputDecoration(
                labelText: "Password",
                hintText: "Who the Fuck needs a Password for a Bus app",
                enabledBorder: UnderlineInputBorder(
                    borderSide: BorderSide(color: Colors.white60)),
                focusedBorder: UnderlineInputBorder(
                    borderSide: BorderSide(color: Colors.white60)),
                hintStyle: TextStyle(color: Colors.grey, fontSize: 12),
                labelStyle: TextStyle(color: Colors.amberAccent, fontSize: 22),
              ),
            ),
            const SizedBox(height: 22),
            ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.amberAccent,
                    textStyle: TextStyle(color: Colors.black)),
                child: const Text(
                  "Create Account",
                  style: TextStyle(color: Colors.black),
                ))
          ],
        ),
      )),
    );
  }
}
