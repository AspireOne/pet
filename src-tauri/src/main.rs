// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod tray;
use tray::{handle_tray_event, init_system_tray};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
fn main() {
    tauri::Builder::default()
        .system_tray(init_system_tray())
        .on_system_tray_event(handle_tray_event)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


// NOTES ----------------------
// Invoke commands directly from JS:
//
// https://tauri.app/v1/guides/getting-started/setup/integrate#invoke-commands
//
// This is how You call it:
// invoke('greet', { name: 'World' })
// `invoke` returns a Promise
// .then((response) => console.log(response))

